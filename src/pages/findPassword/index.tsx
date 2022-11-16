import Layout from '@/components/Layout/Layout';
import FindPassworForm from '@/components/Pages/findPassword/FindForm/Form';
import { ReactElement } from 'react';

function FindPasswordPage() {
  return <FindPassworForm />;
}

FindPasswordPage.getLayout = (page: ReactElement) => <Layout>{page}</Layout>;

export default FindPasswordPage;
