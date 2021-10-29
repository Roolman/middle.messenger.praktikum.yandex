## VanillaTS Messenger

Мессенджер на TS с применением компонентного подхода

## Макет проекта

Макет: https://www.figma.com/file/eZRBWhlYIjEc3cwfYKAFnY/Messenger?node-id=0%3A1

## Netlify

https://cranky-goldberg-655a03.netlify.app

## Local сервер

Написать `npm run start` (linux) или `npm run start-windows` (windows) в консоли для запуска local сервера. Дождаться сборки проекта и перейти на `http://localhost:3000/`.

## Development сервер

Написать `npm run dev` (linux) или `npm run dev-windows` (windows) в консоли для запуска dev сервера. Перейти на `http://localhost:3000/`. Приложение автоматически обновится при изменении файлов.

## Build

Написать `npm run build` (linux) или `npm run build-windows` (windows) в консоли для сборки проекта. Собранные файлы появятся в папке `dist/`.

## Комментарии к проекту

• Постарался максимально декомпозировать элементы на компоненты. В процессе разработки дополнил класс Component новыми возможностями и этапами жизненного цикла.
• Класс для работы с HTTP обернул в собственную реализацию Observable.
• Попробовал добавить в проект Dependency Injection для внедрения сервисов в компоненты.
