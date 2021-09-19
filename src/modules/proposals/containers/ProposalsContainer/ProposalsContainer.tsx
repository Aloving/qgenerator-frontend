import React, { useEffect } from 'react';
import { observer } from 'mobx-react-lite';

import { Proposals, CreateProposal } from '../../components';
import { useStores } from '../../../common/containers';
import { ToolWrapper } from '../../../common/components';
import { Box } from '@material-ui/core';

export const ProposalsContainerPure: React.FC = () => {
  const { questionProposalsStore, userStore } = useStores();

  useEffect(() => {
    if (!questionProposalsStore.loading.status) {
      questionProposalsStore.loadProposals();
    }
  }, []);

  return (
    <ToolWrapper title={<div>Вопросы: Предложения</div>}>
      <Box marginBottom={8}>
        <Proposals
          proposals={questionProposalsStore.proposals}
          isLoading={
            questionProposalsStore.loading.isLoading ||
            questionProposalsStore.proposeProcessAsync.isLoading
          }
          acceptProposal={questionProposalsStore.acceptProposal}
          declineProposal={questionProposalsStore.declineProposal}
        />
      </Box>
      <CreateProposal
        onCreate={questionProposalsStore.proposeQuestion}
        authorId={userStore.user?.id || ''}
      />
    </ToolWrapper>
  );
};

export const ProposalsContainer = observer(ProposalsContainerPure);
