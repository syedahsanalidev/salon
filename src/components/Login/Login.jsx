import { SocialLogin } from 'components/shared/SocialLogin/SocialLogin';
import router from 'next/router';
import { Formik, Field, Form, ErrorMessage } from 'formik';
import loginschema from './schemalogin';
import { login } from './loginservice';
import Link from 'next/link';

export const Login = () => {
  const INITIAL_VALUES = {
    email: '',
    password: ''
  }

  return (
    <>
      {/* <!-- BEGIN LOGIN --> */}

      <Formik
        initialValues={INITIAL_VALUES}
        validationSchema={loginschema}
        onSubmit={async (values, { setSubmitting, resetForm }) => {
          await login(values);
          setSubmitting(false);
          resetForm();

        }}
      >
        <div className='login'>
          <div className='wrapper'>
            <div
              className='login-form js-img'
              style={{ backgroundImage: `url('/assets/img/login-form__bg.png')` }}
            >
              <Form>
                <h3>log in with</h3>
                <SocialLogin />

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
                <div className='box-field'>
                  <Field
                    name='password'
                    type='password'
                    className='form-control'
                    placeholder='Enter your password'
                  />
                  <div className="error">
                    <ErrorMessage name='password' />
                  </div>
                </div>
                <label className='checkbox-box checkbox-box__sm'>
                  <input type='checkbox' />
                  <span className='checkmark'></span>
                  Remember me
                </label>
                <span>
                    <button className='btn' type='submit'>
                      <Link href='/profile'>
                      <a> Log In</a>
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
                  <span>
                    <Link href='/forgot'>
                      <a>Lost your password?</a></Link>
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
        {/* <!-- LOGIN EOF   --> */}
      </Formik>
    </>
  );
};
