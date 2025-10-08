import type { PersonalInfo, Project } from '../types/terminal';

export const personalInfo: PersonalInfo = {
  name: 'Халле Александр',
  title: 'Unity Developer / Game Programmer',
  location: 'Санкт-Петербург, Россия',
  email: 'alex.halle06@list.ru',
  telegram: '@user_Alexander',
  phone: '+7 (967) 967-51-47',
  experience: '3 года 4 месяца',
  skills: [
    'C#', 'Unity', 'SQL', 'Kotlin', '.NET Core',
    'ASP.NET', 'WPF', 'MVVM', 'PostgreSQL', 'MySQL',
    'LINQ', 'DOTween', 'Blender', 'Git', 'REST API'
  ]
};

export const projects: Project[] = [
  {
    name: '2048 Re:Code',
    description: 'Мини-игра на Unity с переработанной логикой и адаптивным UI.',
    status: 'Released',
    links: {
      webgl: 'https://itch.io/placeholder',
      code: 'https://github.com/Leks2000/2048-recode'
    },
    icon: '🎮'
  },
  {
    name: 'SpeedRunner X',
    description: 'Аркадный раннер с системой прогрессии и Unity Particle FX.',
    status: 'Released',
    links: {
      webgl: 'https://itch.io/placeholder',
      code: 'https://github.com/Leks2000/speedrunner-x'
    },
    icon: '🏃'
  },
  {
    name: 'Forgotten Demo',
    description: 'Мини-дема атмосферной 3D-игры на Unity.',
    status: 'Released',
    links: {
      webgl: 'https://itch.io/placeholder'
    },
    icon: '🌫️'
  },
  {
    name: 'Decks & Dungeons ⚔️',
    description: 'Roguelike-карточная игра с системой прогрессии.',
    status: 'In development',
    links: {
      webgl: 'https://itch.io/placeholder',
      code: 'https://github.com/Leks2000/decks-dungeons'
    },
    icon: '⚔️'
  },
  {
    name: 'ProfCheff 🍳',
    description: 'Мобильное AI-приложение, анализирующее содержимое холодильника и предлагающее рецепты.',
    status: 'Released',
    links: {
      android: 'https://github.com/Leks2000/profcheff'
    },
    icon: '🍳'
  },
  {
    name: 'Promptly 🔮',
    description: 'Расширение Chrome для улучшения и генерации промптов с AI-анализом изображений.',
    status: 'In development',
    links: {},
    icon: '🔮'
  },
  {
    name: 'TodIs 📅',
    description: 'Мобильное приложение "Какой сегодня день". Показывает исторические, культурные и забавные события дня.',
    status: 'In development',
    links: {
      android: 'https://github.com/Leks2000/todis'
    },
    icon: '📅'
  }
];

export const socialLinks = {
  github: 'https://github.com/Leks2000',
  itchio: 'https://leks2000.itch.io',
  youtube: 'https://youtube.com/@leks2000',
  telegram: 'https://t.me/user_Alexander'
};