import  Verification from 'components/Verification/Verification';
import { Subscribe } from 'components/shared/Subscribe/Subscribe';
import { PublicLayout } from 'layout/PublicLayout';

const breadcrumbsData = [
  {
    label: 'Home',
    path: '/',
  },
  {
    label: 'Verification Code',
    path: '/verify',
  },
];
const VerifyPage = () => {
  return (
    <PublicLayout breadcrumb={breadcrumbsData} breadcrumbTitle='Verification Code'>
      <Verification/>
      <Subscribe />
    </PublicLayout>
  );
};

export default VerifyPage;
