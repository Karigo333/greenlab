import { Component, AfterViewInit } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';
import { Inject, PLATFORM_ID } from '@angular/core';

@Component({
  selector: 'app-map',
  standalone: true,
  imports: [],
  templateUrl: './map.component.html',
  styleUrl: './map.component.scss'
})
export class MapComponent implements AfterViewInit {
  private map!: L.Map;

  constructor(@Inject(PLATFORM_ID) private platformId: object) {}

  async ngAfterViewInit() {
    if (isPlatformBrowser(this.platformId)) {
      const L = await import('leaflet');

      this.map = L.map('map', {
        center: [46.305836601552954, 30.649910834652218],
        zoom: 15,
        scrollWheelZoom: false,
        attributionControl: false,
      });

      const icon = L.icon({
        iconUrl: './../../../assets/images/location.png',
        iconSize: [50, 50], 
        iconAnchor: [25, 40], 
        popupAnchor: [0, -25],
        className: 'no-border'
      });

      L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        attribution: '&copy; OpenStreetMap contributors',
      }).addTo(this.map);

      const marker = L.marker([46.305836601552954, 30.649910834652218], {icon}).addTo(this.map);

      marker.bindPopup(`
        <div style="display: flex; align-items: end;">
          <img src="./../../../favicon.ico" alt="" style="width: 20px; height: 20px; margin-right: 5px;">
          <b>Greenlab</b>
        </div>
        ул. Олександрійська 2, Чорноморськ
      `).openPopup();
    }

      // Проверка, чтобы работать с контейнером только после инициализации карты
  if (this.map && this.map.getContainer()) {
    this.map.getContainer().addEventListener('wheel', (event: WheelEvent) => {
      if (event.ctrlKey) { // Если зажат Ctrl
        event.preventDefault(); // Предотвращаем стандартное поведение (зум колесиком)
        if (event.deltaY < 0) {
          // Прокрутка вверх — приближаем
          this.map.zoomIn();
        } else {
          // Прокрутка вниз — удаляем
          this.map.zoomOut();
        }
      }
    });
  }
  }
}
