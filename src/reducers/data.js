import {
  REQUEST_PROJECTS,
  RECEIVE_PROJECTS,
  NOT_RECEIVE_PROJECTS,
  REQUEST_KPI_ENTRIES,
  RECEIVE_KPI_ENTRIES,
  NOT_RECEIVE_KPI_ENTRIES,
  UPDATE_COURSE,
} from '../constants/actionTypes';
import illustr1 from '../constants/assets/illustr1.png';
import illustr2 from '../constants/assets/illustr2.png';
import illustr3 from '../constants/assets/illustr3.png';

export default function data(
  state = {
    isFetching: false,
    projects: null,
    courses: [
      {
        id: 1,
        data: [
          {
            id: 1,
            text: 'Какая из перечисленных ниже задач относится к твоему проекту?',
            photo: illustr1,
            state: null,
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
            photo: illustr2,
            state: null,
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
            photo: illustr3,
            state: null,
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
            state: null,
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
        ],
      },
    ],
    errors: null,
  },
  action
) {
  switch (action.type) {
    case REQUEST_PROJECTS:
      return {
        ...state,
        isFetching: true,
      };

    case RECEIVE_PROJECTS:
      return {
        ...state,
        isFetching: false,
        projects: action.projects,
      };

    case NOT_RECEIVE_PROJECTS:
      return {
        ...state,
        isFetching: false,
        errors: action.errors,
      };

    case UPDATE_COURSE:
      return {
        ...state,
        courses: state.courses.map((course) =>
          course.id === action.courseId
            ? {
                ...course,
                data: course.data.map((question) =>
                  question.id === action.questionId
                    ? { ...question, state: action.state }
                    : question
                ),
              }
            : course
        ),
        isFetching: false,
        errors: action.errors,
      };

    case REQUEST_KPI_ENTRIES:
      return {
        ...state,
        isFetching: true,
      };

    case RECEIVE_KPI_ENTRIES:
      return {
        ...state,
        isFetching: false,
        kpi: state.kpi.map((elem) =>
          elem.indexes.some((x) => x.id === action.id)
            ? {
                ...elem,
                indexes: elem.indexes.map((index) =>
                  index.id === action.id
                    ? { ...index, entries: action.entries }
                    : index
                ),
              }
            : elem
        ),
      };

    case NOT_RECEIVE_KPI_ENTRIES:
      return {
        ...state,
        isFetching: false,
        errors: action.errors,
      };

    default:
      return state;
  }
}
