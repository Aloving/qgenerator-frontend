import React, { useEffect } from 'react';
import { observer } from 'mobx-react-lite';

import { Proposals, CreateProposal } from '../../components';
import { useStores } from '../../../common/containers';

export const ProposalsContainerPure: React.FC = () => {
  const { questionProposalsStore, userStore } = useStores();

  useEffect(() => {
    if (!questionProposalsStore.loading.status) {
      questionProposalsStore.loadProposals();
    }
  }, []);

  return (
    <div>
      <Proposals
        proposals={questionProposalsStore.proposals}
        isLoading={
          questionProposalsStore.loading.isLoading ||
          questionProposalsStore.proposeProcessAsync.isLoading
        }
        acceptProposal={questionProposalsStore.acceptProposal}
        declineProposal={questionProposalsStore.declineProposal}
      />
      <CreateProposal
        onCreate={questionProposalsStore.proposeQuestion}
        authorId={userStore.user?.id || ''}
      />
    </div>
  );
};

export const ProposalsContainer = observer(ProposalsContainerPure);
