
# Simple React+Express+MongoDB app

Начало

Клонирование проекта
```bash
  git clone https://github.com/lmanukyan/simple-react-express-app.git
```

Создание .env файлов
```bash
  cp app/.env.sample app/.env
  cp server/.env.sample server/.env
```

Установка зависимостей и build фронта

```bash
  # из папки проекта
  cd app
  yarn install
  yarn build
```

Установка зависимостей и запуск сервера

```bash
  # из папки проекта
  cd server
  yarn install
  yarn start
```