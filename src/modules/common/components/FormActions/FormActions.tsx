import React from 'react';
import { FormattedMessage } from 'react-intl';

import { Button } from '../Button';

import styles from './FormActions.module.css';
import { commonTranslations } from '../../../../translations';

export const FormActions: React.FC = () => {
  return (
    <div className={styles.actions}>
      <div className={styles.action}>
        <Button size="small" variant="text">
          <FormattedMessage {...commonTranslations.cancel} />
        </Button>
      </div>
      <div className={styles.action}>
        <Button size="small" type="submit">
          <FormattedMessage {...commonTranslations.send} />
        </Button>
      </div>
    </div>
  );
};
