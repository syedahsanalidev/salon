import router from 'next/router';
import { Formik, Field, Form, ErrorMessage } from 'formik';
import OtpInput from 'react-otp-input';
import Verfiyschema from './Verifyschema';
import { useState } from 'react';
import { Verify } from './verifyservice';



const Verification = () => {

  const [otp,setOtp]=useState("")

  const INITIAL_VALUES = {
    otp: '',
    password:'',
    confirmPassword:''
    
  }

  return (
    <>
      {/* <!-- BEGIN Verification--> */}

      <Formik
        initialValues={INITIAL_VALUES}
        validationSchema={Verfiyschema}
        onSubmit={ async (values, { setSubmitting ,resetForm}) => {

          await Verify(values);
          
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
                <h3>Verification Code </h3>
                {/* <SocialLogin /> */}

                <div className='box-field'>
                 
                <OtpInput 
                   
                    value={otp}
                    onChange={e => {
                      setOtp(e);
                    }}
                    numInputs={4}
                    otpType='number'
                    separator={<span>-</span>}
                    containerStyle={{
                    justifyContent: 'center',
                    alignItems: 'center',
                    margin: '1.5rem 0',
                    }}
                    inputStyle={{
                      width: '3rem',
                      height: '3rem',
                      margin: '0 1rem',
                      fontSize: '2rem',
                      borderRadius: '4px',
                      border: '1px solid rgba(0,0,0,0.3)',
                    }}
                  secure />
               
                </div> 
                <div className="box-field">
                    <Field
                      type="password"
                      name="password"
                      className="form-control"
                      placeholder="Enter Your Password"
                    />
                    <div className="error">
                      <ErrorMessage name="password" />
                    </div>
                  </div>
                  <div className="box-field">
                    <Field
                      type="password"
                      name="confirmPassword"
                      className="form-control"
                      placeholder="Confirm Password"
                    />
                    <div className="error">
                      <ErrorMessage name="confirmPassword" />
                    </div>
                  </div>
                
                <button className='btn' type='submit'>
                  Verify
                </button>

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
        {/* <!--Verification EOF   --> */}
      </Formik>
    </>
  );
};

export default Verification;
