import React, { useCallback, useRef } from 'react';
import { FormattedMessage } from 'react-intl';
import { Formik, FormikProps, Field, FieldProps, Form } from 'formik';

import { Button, TextField } from '../../../common/components';

import { commonTranslations } from '../../../../translations';
import styles from './AnswerForm.module.css';

import { IAnswerForm } from '../../interfaces';

interface IAnswerFormProps {
  isLoading?: boolean;

  onSubmit: (payload: IAnswerForm) => void;
}

export const AnswerForm: React.FC<IAnswerFormProps> = ({ onSubmit }) => {
  const formikRef = useRef<FormikProps<IAnswerForm>>(null);
  const handleSubmit = useCallback(
    (values: IAnswerForm) => {
      onSubmit(values);
      formikRef.current?.resetForm();
    },
    [formikRef, onSubmit],
  );

  return (
    <Formik<IAnswerForm>
      initialValues={{ answer: '' }}
      innerRef={formikRef}
      onSubmit={handleSubmit}
    >
      {({ handleSubmit }) => (
        <Form onSubmit={handleSubmit}>
          <div className={styles.root}>
            <Field name="answer">
              {({ field }: FieldProps<IAnswerForm['answer']>) => (
                <TextField
                  {...field}
                  label={<FormattedMessage {...commonTranslations.answer} />}
                  fullWidth
                />
              )}
            </Field>
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
          </div>
        </Form>
      )}
    </Formik>
  );
};
