import React from 'react';
import styles from '../../../users/components/CreateQuestion/CreateQuestion.module.css';
import { Button } from '../index';
import { FormattedMessage } from 'react-intl';
import { commonTranslations } from '../../../../translations';

interface FormActionsProps {
  onSubmit: () => void;
}

export const FormActions: React.FC<FormActionsProps> = ({ onSubmit }) => {
  return (
    <div className={styles.actions}>
      <div className={styles.action}>
        <Button size="small" variant="text">
          <FormattedMessage {...commonTranslations.cancel} />
        </Button>
      </div>
      <div className={styles.action}>
        <Button size="small" type="submit" onClick={onSubmit}>
          <FormattedMessage {...commonTranslations.send} />
        </Button>
      </div>
    </div>
  );
};
