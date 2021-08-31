import React, { useCallback } from 'react';

import { ISignInForm, SignInForm } from '../../components';
import { useStores } from '../../../common/containers/StoreProvider/useStores';
import { observer } from 'mobx-react-lite';

export const SignInFormContainerPure: React.FC = () => {
  const { authenticationStore, registrationStore } = useStores();

  const handleSignIn = useCallback(
    (payload: ISignInForm) => {
      registrationStore.registration(payload);
    },
    [authenticationStore],
  );

  return (
    <SignInForm
      onSignIn={handleSignIn}
      isLoading={!!registrationStore.async?.isLoading}
      isFailed={!!registrationStore.async?.isFailed}
      isSucceed={!!registrationStore.async?.isSucceed}
    />
  );
};

export const SignInFormContainer = observer(SignInFormContainerPure);
