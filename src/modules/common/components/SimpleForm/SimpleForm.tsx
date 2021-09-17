import React from 'react';

import { ToolWrapper } from '../ToolWrapper';

interface ISimpleFormProps {
  title: React.ReactElement;
}

export const SimpleForm: React.FC<ISimpleFormProps> = ({ children, title }) => {
  return <ToolWrapper title={title}>{children}</ToolWrapper>;
};
