// import { SocialLogin } from 'components/shared/SocialLogin/SocialLogin';
import router from 'next/router';
import { Formik, Field, Form, ErrorMessage } from 'formik';
import Forgotschema from './Forgotschema';
import { Forgot } from './Forgotservice';
import Link from 'next/link';

const Forgotpassword = () => {
  const INITIAL_VALUES = {
    email: '',

  }
  return (
    <>
      {/* <!-- BEGIN Forgotpassword--> */}

      <Formik
        initialValues={INITIAL_VALUES}
        validationSchema={Forgotschema}
        onSubmit={async (values, { setSubmitting, resetForm }) => {
          await Forgot(values);
          setSubmitting(false);
          resetForm();

        }}
      >
        <div className='forgot'>
          <div className='wrapper'>
            <div
              className='login-form js-img'
              style={{ backgroundImage: `url('/assets/img/login-form__bg.png')` }}
            >
              <Form>
                <h3>Forgot Password</h3>
                <div className='box-field'>
                  <Field
                    name='email'
                    type='text'
                    className='form-control'
                    placeholder='Enter your email or nickname'

                  />
                  <div className="error">
                    <ErrorMessage name="email" />
                  </div>
                </div>
                <span>
                  <button className='btn' type='submit'>
                    <Link href='/verify'>
                      <a>Submit</a>
                    </Link>
                  </button>
                </span>
                <div className='login-form__bottom'>
                  <span>
                    No account?{' '}
                    <a onClick={() => router.push('/registration')}>
                      Register now
                    </a>
                  </span>
                </div>
              </Form>
            </div>
          </div>
          <img
            className='promo-video__decor js-img'
            src='/assets/img/promo-video__decor.jpg'
            alt=''
          />
        </div>
        {/* <!-- FORGOTPASSWORD EOF   --> */}
      </Formik>
    </>
  );
};

export default Forgotpassword;
