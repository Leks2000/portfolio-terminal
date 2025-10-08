# 🚀 Инструкция по деплою Portfolio Terminal

## Для GitHub Pages

1. **Создайте репозиторий на GitHub** с именем `portfolio-terminal`

2. **Добавьте remote origin**:
```bash
git remote add origin https://github.com/YOUR_USERNAME/portfolio-terminal.git
```

3. **Отправьте код в репозиторий**:
```bash
git push -u origin main
```

4. **Настройте GitHub Pages**:
   - Зайдите в Settings репозитория
   - Выберите Pages в боковом меню
   - Выберите Source: "GitHub Actions"
   - Workflow запустится автоматически после push

5. **Альтернативный способ - ручной деплой**:
```bash
npm run deploy
```

## Настройка base URL

В `vite.config.ts` измените:
```typescript
base: '/portfolio-terminal/', // Замените на название вашего репозитория
```

## Настройка в package.json

Измените homepage в `package.json`:
```json
"homepage": "https://YOUR_USERNAME.github.io/portfolio-terminal"
```

## Проверка локально

1. **Development mode**:
```bash
npm run dev
```

2. **Production preview**:
```bash
npm run build
npm run preview
```

## Возможные проблемы

1. **404 ошибка на GitHub Pages**:
   - Проверьте правильность base URL в vite.config.ts
   - Убедитесь, что branch указан как main в GitHub Pages настройках

2. **Шрифты не загружаются**:
   - Google Fonts подключен через @import в CSS
   - Fallback: JetBrains Mono, Fira Code, Consolas, Monaco, monospace

3. **CSS не применяется**:
   - Убедитесь, что Tailwind CSS правильно настроен
   - Проверьте наличие всех зависимостей

## После успешного деплоя

Ваш сайт будет доступен по адресу:
`https://YOUR_USERNAME.github.io/portfolio-terminal`