import React, { useCallback, useRef } from 'react';
import { FormattedMessage } from 'react-intl';
import { Formik, Field, FieldProps, Form, FormikProps } from 'formik';

import {
  AuthorIdField,
  FormActions,
  TextField,
  ToolWrapper,
} from '../../../common/components';

import {
  commonTranslations,
  usersTranslations,
} from '../../../../translations';

import { ICreateQuestionDto } from '../../../common/dto';

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
  const formikRef = useRef<FormikProps<ICreateQuestionDto>>(null);
  const handleSubmit = useCallback(
    (payload: ICreateQuestionDto) => {
      onCreate(payload);
      formikRef.current?.resetForm();
    },
    [formikRef, onCreate],
  );

  return (
    <Formik<ICreateQuestionDto>
      initialValues={{ ...initialValues, authorId }}
      enableReinitialize
      onSubmit={handleSubmit}
      innerRef={formikRef}
    >
      {({ handleSubmit }) => (
        <Form onSubmit={handleSubmit}>
          <ToolWrapper
            title={<FormattedMessage {...usersTranslations.createQuestion} />}
            borderless={true}
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
            <FormActions />
          </ToolWrapper>
        </Form>
      )}
    </Formik>
  );
};
