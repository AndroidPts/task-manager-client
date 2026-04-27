# Task Manager — Клиентская часть

## Технологии
- React 18
- Redux Toolkit
- React Router DOM v6
- Axios
- Ant Design

## Страницы
| Роут | Описание |
|------|----------|
| /login | Вход в систему |
| /register | Регистрация |
| /dashboard | Главный дашборд (задачи на сегодня) |
| /tasks | Полный список задач с фильтрацией |
| /statistics | Статистика продуктивности |
| /profile | Настройки профиля |

## Запуск проекта

\`\`\`bash
npm install
npm start
\`\`\`

Приложение откроется на http://localhost:3000

## Сборка

\`\`\`bash
npm run build
\`\`\`

## Связь с сервером

Серверная часть: [task-manager-server](https://github.com/AndroidPts/task-manager-server)

API-запросы настроены через Axios с автоматической подстановкой JWT-токена.
