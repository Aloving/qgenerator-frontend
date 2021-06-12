import { defineMessages } from 'react-intl';

export const questionTranslations = defineMessages({
  question: {
    id: 'app.question.textLabel',
    defaultMessage: 'Вопрос',
  },
  answer: {
    id: 'qpp.question.answer',
    defaultMessage: 'Ответ',
  },
  answers: {
    id: 'qpp.question.answers',
    defaultMessage: 'Другие ответы',
  },
  answerCounter: {
    id: 'qpp.question.answerCounter',
    defaultMessage: 'Ответы: {count}',
  },
  answerIt: {
    id: 'app.question.answerIt',
    defaultMessage: 'Ответить',
  },
  cancel: {
    id: 'app.question.cancel',
    defaultMessage: 'Отменить',
  },
  send: {
    id: 'app.question.send',
    defaultMessage: 'Отправить',
  },
  oneMoreAnswer: {
    id: 'app.question.oneMoreAnswer',
    defaultMessage: 'Ещё вопрос',
  },
  writeYourAnswer: {
    id: 'app.question.writeYourAnswer',
    defaultMessage: 'Напиши свой ответ...',
  },
});
