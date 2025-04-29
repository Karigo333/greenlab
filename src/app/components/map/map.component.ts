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
      const leafletModule = await import('leaflet');
      const L = leafletModule.default || leafletModule; // Ensure proper initialization of L
      console.log(L);

      this.map = L.map('map', {
        center: [46.305836601552954, 30.649910834652218],
        zoom: 15,
        scrollWheelZoom: false,
        attributionControl: false,
        
      });

      const iconLoc = L.icon({
        iconUrl: '../../../assets/images/location.png',
        iconSize: [50, 50], 
        iconAnchor: [25, 40], 
        popupAnchor: [0, -25],
        className: 'no-border'
      });

      L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        attribution: '&copy; OpenStreetMap contributors',
      }).addTo(this.map);

      const marker = L.marker([46.305836601552954, 30.649910834652218], {icon: iconLoc}).addTo(this.map);

    
      
      const popup = L.popup({
        className: 'no-padding-popup',
        maxWidth: 150,
        closeButton: true,
      })
        .setLatLng([46.305836601552954, 30.649910834652218])
        .setContent(`
          <div style="margin: 0;">
            <div style="display: flex; align-items: end;">
              <img src="../../../favicon.ico" alt="" style="width: 20px; height: 20px; margin-right: 5px;">
              <b>Greenlab</b>
            </div>
            ул. Олександрійська 2, Чорноморськ
          </div>
        `);
      
      marker.bindPopup(popup).openPopup();
    }

  if (this.map && this.map.getContainer()) {
    this.map.getContainer().addEventListener('wheel', (event: WheelEvent) => {
      if (event.ctrlKey) {
        event.preventDefault();
        if (event.deltaY < 0) {
          this.map.zoomIn();
        } else {
          this.map.zoomOut();
        }
      }
    });
  }
  }
}
