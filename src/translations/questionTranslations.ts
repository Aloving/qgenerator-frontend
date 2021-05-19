import { defineMessages } from 'react-intl';

export const questionTranslations = defineMessages({
  question: {
    id: 'app.question.textLabel',
    defaultMessage: 'Вопрос',
  },
  answers: {
    id: 'qpp.question.answers',
    defaultMessage: 'Другие ответы',
  },
  answerCounter: {
    id: 'qpp.question.answers',
    defaultMessage: 'Ответы: {count}',
  },
  answerIt: {
    id: 'app.question.answerIt',
    defaultMessage: 'Ответить',
  },
  oneMoreAnswer: {
    id: 'app.question.oneMoreAnswer',
    defaultMessage: 'Ещё вопрос',
  },
});
