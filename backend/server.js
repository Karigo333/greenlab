const express = require('express');
const mysql = require('mysql2');
const app = express();

// Подключение к базе данных
const db = mysql.createConnection({
    host: process.env.DB_HOST || 'localhost',
    user: process.env.DB_USER || 'root',
    password: process.env.DB_PASSWORD || 'root',
    database: process.env.DB_NAME || 'greenlab',
    port: process.env.DB_PORT || 3307
});

// Проверка подключения
db.connect((err) => {
    if (err) {
        console.error('Ошибка подключения к базе: ' + err.stack);
        return;
    }
    console.log('Подключение к базе данных успешно');
});

app.get('/posts', (req, res) => {
    console.log('Запрос на получение постов'); // Логирование запроса
    db.query('SELECT * FROM posts', (err, results) => {
        if (err) {
            console.error('Ошибка при запросе данных:', err); // Логирование ошибок
            res.status(500).send('Ошибка при запросе данных');
        } else {
            console.log('Полученные данные:', results); // Логирование полученных данных
            res.json(results);
        }
    });
});

// Запуск сервера
const PORT = process.env.PORT || 3001;
app.listen(PORT, () => {
    console.log(`Бэкенд работает на порту ${PORT}`);
});
