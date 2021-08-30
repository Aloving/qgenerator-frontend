import React, { useCallback } from 'react';
import { FormattedMessage } from 'react-intl';
import { Formik, Field, FieldProps } from 'formik';

import { Button, TextField } from '../../../common/components';
import { signInValidationForm } from './signInValidationForm';

import styles from './SignInForm.module.css';
import { registrationTranslations } from '../../../../translations';

export interface ISignInForm {
  login: string;
  password: string;
  email: string;
}

const initialValues: ISignInForm = {
  login: '',
  password: '',
  email: '',
};

export const SignInForm: React.FC = () => {
  const handleSubmit = useCallback((values: ISignInForm) => {
    console.log(values);
  }, []);

  return (
    <div className={styles.root}>
      <div className={styles.form}>
        <Formik<ISignInForm>
          onSubmit={handleSubmit}
          validationSchema={signInValidationForm}
          validateOnChange={false}
          validateOnBlur={false}
          initialValues={initialValues}
        >
          {({ handleSubmit }) => {
            return (
              <>
                <div className={styles.fieldWrapper}>
                  <Field name="login">
                    {({ field, form }: FieldProps<ISignInForm['login']>) => (
                      <>
                        <TextField
                          id="login"
                          placeholder="login"
                          label={
                            <FormattedMessage
                              {...registrationTranslations.login}
                            />
                          }
                          fullWidth
                          error={!!form.errors['login']}
                          helperText={form.errors['login']}
                          {...field}
                        />
                      </>
                    )}
                  </Field>
                </div>
                <div className={styles.fieldWrapper}>
                  <Field name="password">
                    {({ field, form }: FieldProps<ISignInForm['password']>) => (
                      <TextField
                        id="password"
                        label={
                          <FormattedMessage
                            {...registrationTranslations.password}
                          />
                        }
                        type="password"
                        fullWidth
                        className={styles.field}
                        error={!!form.errors['password']}
                        helperText={form.errors['password']}
                        {...field}
                      />
                    )}
                  </Field>
                </div>
                <div className={styles.fieldWrapper}>
                  <Field name="email">
                    {({ field, form }: FieldProps<ISignInForm['email']>) => (
                      <TextField
                        id="email"
                        label={
                          <FormattedMessage
                            {...registrationTranslations.email}
                          />
                        }
                        type="email"
                        fullWidth
                        className={styles.field}
                        error={!!form.errors['email']}
                        helperText={form.errors['email']}
                        {...field}
                      />
                    )}
                  </Field>
                </div>
                <div>
                  <Button
                    size="small"
                    type="submit"
                    onClick={() => handleSubmit()}
                  >
                    <FormattedMessage
                      {...registrationTranslations.registration}
                    />
                  </Button>
                </div>
              </>
            );
          }}
        </Formik>
      </div>
    </div>
  );
};
