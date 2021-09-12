import React from 'react';
import { observer } from 'mobx-react-lite';

import { Proposals } from '../../components';
import { questionProposalsStore } from '../../entities';

export const ProposalsContainerPure: React.FC = () => {
  return <Proposals proposals={questionProposalsStore.proposals} />;
};

export const ProposalsContainer = observer(ProposalsContainerPure);
