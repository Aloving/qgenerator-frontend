import React, { useCallback } from 'react';
import { FormattedMessage } from 'react-intl';
import { Formik, Field, FieldProps } from 'formik';

import { Button, TextField } from '../../../common/components';
import { ICreateQuestionDto } from '../../../common/dto';
import {
  commonTranslations,
  usersTranslations,
} from '../../../../translations';
import { ToolWrapper } from '../ToolWrapper';

import styles from './CreateQuestion.module.css';

interface CreateQuestionProps {
  onCreate(payload: ICreateQuestionDto): void;
  authorId: string;
}

const initialValues: ICreateQuestionDto = {
  text: '',
  authorId: '',
};

export const CreateQuestion: React.FC<CreateQuestionProps> = ({
  onCreate,
  authorId,
}) => {
  const handleSubmit = useCallback((payload: ICreateQuestionDto) => {
    onCreate(payload);
  }, []);

  console.log(authorId);

  return (
    <Formik<ICreateQuestionDto>
      initialValues={{ ...initialValues, authorId }}
      enableReinitialize
      onSubmit={handleSubmit}
    >
      {({ handleSubmit }) => (
        <ToolWrapper
          title={<FormattedMessage {...usersTranslations.createQuestion} />}
        >
          <>
            <Field name="text">
              {({ field }: FieldProps) => (
                <TextField
                  {...field}
                  id="question-field"
                  label={<FormattedMessage {...commonTranslations.question} />}
                  fullWidth
                />
              )}
            </Field>
            <Field name="authorId">
              {({ field }: FieldProps) => (
                <TextField
                  {...field}
                  id="question-authorId"
                  label={<FormattedMessage {...usersTranslations.authorId} />}
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
                <Button
                  size="small"
                  type="submit"
                  onClick={() => handleSubmit()}
                >
                  <FormattedMessage {...commonTranslations.send} />
                </Button>
              </div>
            </div>
          </>
        </ToolWrapper>
      )}
    </Formik>
  );
};
