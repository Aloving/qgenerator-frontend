import React, { useCallback } from 'react';
import { FormattedMessage } from 'react-intl';
import { Formik, Field, FieldProps } from 'formik';

import {
  AuthorIdField,
  FormActions,
  SimpleForm,
  TextField,
} from '../../../common/components';

import { ICreateQuestionDto } from '../../../common/dto';

import {
  commonTranslations,
  usersTranslations,
} from '../../../../translations';

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

  return (
    <Formik<ICreateQuestionDto>
      initialValues={{ ...initialValues, authorId }}
      enableReinitialize
      onSubmit={handleSubmit}
    >
      {({ handleSubmit }) => (
        <SimpleForm
          title={<FormattedMessage {...usersTranslations.createQuestion} />}
        >
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
          <AuthorIdField id="question-authorId" />
          <FormActions onSubmit={handleSubmit} />
        </SimpleForm>
      )}
    </Formik>
  );
};
