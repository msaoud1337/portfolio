import MainLayout from 'layouts/MainLayout';
import { type ReactElement } from 'react';

function Index() {
  return <h1>Hello world</h1>;
}

Index.getLayout = function getLayout(page: ReactElement) {
  return (
    <MainLayout meta={{ title: 'Msaoud - Personal Portfolio', description: '' }}>{page}</MainLayout>
  );
};

export default Index;
