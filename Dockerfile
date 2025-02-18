# Используем официальный образ Nginx для раздачи статического контента
FROM nginx:latest

# Удаляем стандартные настройки Nginx
RUN rm -rf /etc/nginx/conf.d

# Копируем конфигурацию Nginx в контейнер
COPY nginx.conf /etc/nginx/conf.d/default.conf

# Копируем скомпилированный фронтенд в директорию для Nginx
COPY dist/greenlab/browser /usr/share/nginx/html

# Открываем порт 80 для доступа к приложению
EXPOSE 80

# Запускаем Nginx
CMD ["nginx", "-g", "daemon off;"]