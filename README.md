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

## Запуск

\`\`\`bash
npm install
npm start
\`\`\`

## Переменные окружения

Создайте файл `.env`:

\`\`\`
REACT_APP_API_URL=http://localhost:5000/api
\`\`\`

## Связь с сервером

Серверная часть: [task-manager-server](https://github.com/AndroidPts/task-manager-server)

## Автор

Прасолов Захар, группа ИС21