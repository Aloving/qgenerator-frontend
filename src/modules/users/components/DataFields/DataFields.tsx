import React, { createRef, PropsWithChildren, useCallback } from 'react';
import { Formik } from 'formik';

import { Button } from '../../../common/components';

import { FormikProps } from 'formik';

import { ToolWrapper } from '../../../common/components/ToolWrapper';
import { DataFieldStatus } from './components/DataFieldStatus';

import styles from './DataFields.module.css';

type DataFieldsProps = PropsWithChildren<{
  title: React.ReactElement;
}>;

export const DataFields = <T,>({ children, title }: DataFieldsProps) => {
  const formRef: React.Ref<FormikProps<T>> = createRef();
  const handleSubmit = useCallback(() => {
    formRef?.current?.setStatus(null);
  }, [formRef]);

  return (
    <Formik<T>
      onSubmit={handleSubmit}
      initialValues={{} as T}
      innerRef={formRef}
      enableReinitialize
    >
      {({ handleSubmit, status }) => (
        <ToolWrapper title={title}>
          <>
            <div>
              {React.Children.map(children, (child) => {
                return <div className={styles.field}>{child}</div>;
              })}
            </div>
            {status === DataFieldStatus.Edit && (
              <Button onClick={() => handleSubmit()}>Save</Button>
            )}
          </>
        </ToolWrapper>
      )}
    </Formik>
  );
};
