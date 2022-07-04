import Forgotpassword from 'components/Forgotpassword/Forgotpassword'
import { Subscribe } from 'components/shared/Subscribe/Subscribe';
import { PublicLayout } from 'layout/PublicLayout';

const breadcrumbsData = [
  {
    label: 'Home',
    path: '/',
  },
  {
    label: 'Forgot Password',
    path: '/forgot',
  },
];
const ForgotPage = () => {
  return (
    <PublicLayout breadcrumb={breadcrumbsData} breadcrumbTitle='Forgot Password'>
      <Forgotpassword/>
      <Subscribe />
    </PublicLayout>
  );
};

export default ForgotPage;
