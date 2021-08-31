import React, { useCallback } from 'react';
import { FormattedMessage } from 'react-intl';
import { Formik, Field, FieldProps } from 'formik';
import { Alert } from '@material-ui/lab';
import { Link } from 'react-router-dom';

import { Button, TextField } from '../../../common/components';
import { signInValidationForm } from './signInValidationForm';

import styles from './SignInForm.module.css';
import { loginUrl } from '../../../common/utils';
import { registrationTranslations } from '../../../../translations';

export interface ISignInForm {
  login: string;
  password: string;
  email: string;
}

interface SignInFormProps {
  onSignIn(payload: ISignInForm): void;
  isLoading: boolean;
  isFailed: boolean;
  isSucceed: boolean;
}

const initialValues: ISignInForm = {
  login: '',
  password: '',
  email: '',
};

export const SignInForm: React.FC<SignInFormProps> = ({
  onSignIn,
  isFailed,
  isSucceed,
  isLoading,
}) => {
  const handleSubmit = useCallback(
    (values: ISignInForm) => {
      onSignIn(values);
    },
    [onSignIn],
  );

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
                          disabled={isLoading}
                          label={
                            <FormattedMessage
                              {...registrationTranslations.login}
                            />
                          }
                          fullWidth
                          error={isFailed || !!form.errors['login']}
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
                        disabled={isLoading}
                        label={
                          <FormattedMessage
                            {...registrationTranslations.password}
                          />
                        }
                        type="password"
                        fullWidth
                        className={styles.field}
                        error={isFailed || !!form.errors['password']}
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
                        disabled={isLoading}
                        label={
                          <FormattedMessage
                            {...registrationTranslations.email}
                          />
                        }
                        type="email"
                        fullWidth
                        className={styles.field}
                        error={isFailed || !!form.errors['email']}
                        helperText={form.errors['email']}
                        {...field}
                      />
                    )}
                  </Field>
                </div>
                {isSucceed && (
                  <div className={styles.success}>
                    <Alert color="success">
                      <FormattedMessage
                        {...registrationTranslations.successRegistration}
                      />{' '}
                      <Link to={loginUrl}>
                        <FormattedMessage {...registrationTranslations.link} />
                      </Link>
                    </Alert>
                  </div>
                )}

                <div>
                  <Button
                    size="small"
                    type="submit"
                    onClick={() => handleSubmit()}
                    disabled={isLoading}
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
