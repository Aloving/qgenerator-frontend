import React from 'react';
import { FormattedMessage } from 'react-intl';

import { DataFields } from '../DataFields';

import { usersTranslations } from '../../../../translations';
import { IUser } from '../../interfaces';
import { DataField } from '../DataFields/components';

export interface UserDataProps extends Pick<IUser, 'login' | 'email' | 'role'> {
  answerCount: number;
  questionsCount: number;
}

export const UserData: React.FC<UserDataProps> = ({
  login,
  email,
  answerCount,
  questionsCount,
  role,
}) => {
  return (
    <DataFields<UserDataProps>
      title={<FormattedMessage {...usersTranslations.userInfo} />}
    >
      <DataField
        name="login"
        value={login}
        label={<FormattedMessage {...usersTranslations.userLogin} />}
      />
      <DataField
        name="email"
        value={email}
        label={<FormattedMessage {...usersTranslations.email} />}
      />
      <DataField
        name="answerCount"
        value={answerCount}
        label={<FormattedMessage {...usersTranslations.questionsCount} />}
      />
      <DataField
        name="questionsCount"
        value={questionsCount}
        label={<FormattedMessage {...usersTranslations.answerCount} />}
      />
      <DataField
        name="role"
        value={role}
        label={<FormattedMessage {...usersTranslations.role} />}
      />
    </DataFields>
  );
};
