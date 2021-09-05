import { history } from '../../entities';

import { INavigator } from '../../interfaces';
import { buildQuestionId, settingsUrl } from '../urls';

const goToSettings = () => {
  history.push(settingsUrl);
};

const goToQuestion = (questionId: number) => {
  history.push(buildQuestionId(questionId));
};

export const navigator: INavigator = {
  goToQuestion,
  goToSettings,
};
