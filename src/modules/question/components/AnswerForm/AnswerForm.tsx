import React from 'react';
import { FormattedMessage } from 'react-intl';
import { makeStyles, TextField } from '@material-ui/core';

import { Button } from '../../../common/components';

import { questionTranslations } from '../../../../translations';
import styles from './AnswerForm.module.css';

interface IAnswerFormProps {
  isLoading?: boolean;
}

const useStyles = makeStyles((theme) => ({
  label: {
    color: theme.palette.text.primary,
  },
  fieldText: {
    color: theme.palette.text.primary,
  },
  focusedLabel: {
    color: `${theme.palette.text.disabled} !important`,
  },
  borders: {
    '&&&:before': {
      borderColor: `${theme.palette.text.disabled} !important`,
    },
  },
}));

export const AnswerForm: React.FC<IAnswerFormProps> = () => {
  const classes = useStyles();

  return (
    <div className={styles.root}>
      <TextField
        id="answer-field"
        label={<FormattedMessage {...questionTranslations.answer} />}
        InputLabelProps={{
          classes: {
            root: classes.label,
            formControl: classes.fieldText,
            shrink: classes.focusedLabel,
            focused: classes.borders,
          },
        }}
        InputProps={{
          classes: {
            root: classes.borders,
            input: classes.borders,
            underline: classes.borders,
            focused: classes.borders,
            formControl: classes.borders,
          },
        }}
        fullWidth
      />
      <div className={styles.actions}>
        <div className={styles.action}>
          <Button size="small" variant="text">
            <FormattedMessage {...questionTranslations.cancel} />
          </Button>
        </div>
        <div className={styles.action}>
          <Button size="small">
            <FormattedMessage {...questionTranslations.send} />
          </Button>
        </div>
      </div>
    </div>
  );
};
