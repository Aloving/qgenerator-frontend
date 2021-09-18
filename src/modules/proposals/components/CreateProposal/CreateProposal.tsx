import React, { useCallback } from 'react';
import { FormattedMessage } from 'react-intl';
import { Field, FieldProps, Formik } from 'formik';

import {
  AuthorIdField,
  FormActions,
  TextField,
  SimpleForm,
} from '../../../common/components';

import { IProposeQuestionDto } from '../../dto';

import {
  commonTranslations,
  usersTranslations,
} from '../../../../translations';
import { FormikHelpers } from 'formik/dist/types';
import { IUser } from '../../../users';

interface CreateProposalProps {
  onCreate(payload: IProposeQuestionDto): void;
  authorId: string;
}

const initialValues: IProposeQuestionDto = {
  text: '',
  authorId: '',
};

export const CreateProposal: React.FC<CreateProposalProps> = ({
  onCreate,
  authorId = '' as IUser['id'],
}) => {
  const handleSubmit = useCallback(
    (
      payload: IProposeQuestionDto,
      helpers: FormikHelpers<IProposeQuestionDto>,
    ) => {
      onCreate(payload);
      helpers.resetForm({ values: { ...initialValues, authorId } });
    },
    [authorId],
  );

  return (
    <Formik<IProposeQuestionDto>
      initialValues={{ ...initialValues, authorId }}
      enableReinitialize
      onSubmit={handleSubmit}
    >
      {({ handleSubmit }) => (
        <SimpleForm
          title={
            <FormattedMessage {...usersTranslations.createQuestionProposal} />
          }
        >
          <Field name="text">
            {({ field }: FieldProps) => (
              <TextField
                {...field}
                id="question-proposal-field"
                label={
                  <FormattedMessage {...commonTranslations.questionProposal} />
                }
                fullWidth
              />
            )}
          </Field>
          <AuthorIdField id="proposal-question-authorId" />
          <FormActions onSubmit={handleSubmit} />
        </SimpleForm>
      )}
    </Formik>
  );
};