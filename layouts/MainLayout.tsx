import { styled } from '@mui/material/styles';
import type { ReactNode } from 'react';

import type { IMetaProps } from './Meta';
import { Meta } from './Meta';

type IMainProps = {
  meta: IMetaProps;
  children: ReactNode;
};

const RootStyle = styled('div')({
  display: 'flex',
  minHeight: '100vh',
  overflow: 'hidden',
});

function MainLayout({ meta, children }: IMainProps) {
  return (
    <>
      <Meta {...meta} />
      <RootStyle>{children}</RootStyle>
    </>
  );
}

export default MainLayout;
