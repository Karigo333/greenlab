const express = require('express');
const mysql = require('mysql2');
const app = express();

// Подключение к базе данных
const db = mysql.createConnection({
    host: process.env.DB_HOST || 'localhost',
    user: process.env.DB_USER || 'root',
    password: process.env.DB_PASSWORD || 'root',
    database: process.env.DB_NAME || 'greenlab'
});

// Проверка подключения
db.connect((err) => {
    if (err) {
        console.error('Ошибка подключения к базе: ' + err.stack);
        return;
    }
    console.log('Подключение к базе данных успешно');
});

// Пример API эндпоинта
app.get('/posts', (req, res) => {
    db.query('SELECT * FROM posts', (err, results) => {
        if (err) {
            res.status(500).send('Ошибка при запросе данных');
        }
        res.json(results);
    });
});

app.listen(3000, () => {
    console.log('Бэкенд работает на порту 3000');
});