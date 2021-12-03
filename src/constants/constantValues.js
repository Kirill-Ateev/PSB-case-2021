export const API_URL = 'https://e-kondr01.ru/api';
export const PROGRESS_STEP = 5;
export const COIN_STEP = 100;
export const courseCardData = [
  {
    id: 1,
    text: 'Вводный курс по разработке платформы онбординга новых сотрудников',
    link: `1`,
  },
  {
    id: 2,
    text: 'Ознакомление с офисом',
    link: `#`,
  },
  {
    id: 3,
    text: 'Ознакомление с корпоративной культурой',
    link: `#`,
  },
];

export const exercises = [
  {
    id: 1,
    text: 'Какая из перечисленных ниже задач относится к твоему проекту?',
    variants: [
      {
        id: 1,
        text: 'Сокращение срока адаптации нового сотрудника проекта с 3 месяцев до 1 месяца',
        answer: true,
      },
      {
        id: 2,
        text: 'Привлечение новых клиентов из числа студентов',
        answer: false,
      },
      {
        id: 3,
        text: 'Внедрение метавселенной в экосистему банка',
        answer: false,
      },
    ],
    correct: 'Правильно!',
    incorrect: 'Это не так, внимательнее прочитате описание проекта',
  },
  {
    id: 2,
    text: 'Какую из перечисленных платформ мы используем в рамках данного проекта для рабочей коммуникации?',
    variants: [
      {
        id: 4,
        text: 'Slack',
        answer: true,
      },
      {
        id: 5,
        text: 'Вконтакте',
        answer: false,
      },
      {
        id: 6,
        text: 'Телеграмм',
        answer: false,
      },
    ],
    correct: 'Всё верно!',
    incorrect:
      'На этом проекте для рабочей переписки используется именно Slack',
  },
  {
    id: 3,
    text: 'Есть ли daily созвоны? Если да, то в чём их особенности?',
    variants: [
      {
        id: 7,
        text: 'Нет, но есть созвоны в течение спринтов',
        answer: false,
      },
      {
        id: 8,
        text: 'Да, проводится ежедневно, кроме пятницы. Проводим в Zoom.',
        answer: true,
      },
      {
        id: 9,
        text: 'Да, проводится ежедневно, кроме выходных. Проводим в Google meet.',
        answer: false,
      },
    ],
    correct: 'Так и есть',
    incorrect:
      'Это не так, обратите внимение на пункт инструментов своего проекта',
  },
  {
    id: 4,
    text: 'Какая методология используется в твоём проекте?',
    variants: [
      {
        id: 1,
        text: 'Agile, Scrum',
        answer: true,
      },
      {
        id: 2,
        text: 'Waterfall',
        answer: true,
      },
      {
        id: 3,
        text: 'Incremental',
        answer: false,
      },
    ],
    correct: 'Правильно!',
    incorrect: `Неверно! Прочитать про методологии Agile и Scrum, которые используются в твоём проекте, ты можешь по ссылкам:
    https://www.atlassian.com/ru/agile`,
  },
];
