import { SocialLogin } from "components/shared/SocialLogin/SocialLogin";
import router from "next/router";
import { Formik, Field, Form, ErrorMessage } from 'formik';
import registerSchema from "./schema";
import { Register } from "./service";
export const Registration = () => {

  const INITIAL_VALUES = {
    firstName: '',
    lastName: '',
    email: '',
    contactNo: '',
    password: '',
    confirmPassword: '',
    Category:''
  }

  return (
    <>
      {/* <!-- BEGIN REGISTRATION --> */}

      <Formik
        initialValues={INITIAL_VALUES}
        validationSchema={registerSchema}
        onSubmit={async (values, { setSubmitting }) => {
          // console.log(" form dta", values)
           await Register(values);
          setSubmitting(false);
          // resetForm()

        }}
      >
        <div className="login registration">
          <div className="wrapper">
            <div
              className="login-form js-img"
              style={{
                backgroundImage: `url('/assets/img/registration-form__bg.png')`,
              }}

            >

              <Form>
                <h3>register now</h3>
                <SocialLogin />

                <div className="box-field__row">
                  <div className="box-field">

                    <Field className="form-control" name="firstName" type="text"  placeholder="First Name " />
                    <div className="error">
                      <ErrorMessage name="firstName" />
                    </div>
                  </div>
                  <div className="box-field">
                    <Field className="form-control" name="lastName" type="text" placeholder="Last Name" />
                    <div className="error">
                      <ErrorMessage name="lastName" />
                    </div>
                  </div>
                </div>
                <div className="box-field__row">
                  <div className="box-field">
                    <Field className="form-control" name="contactNo" type="tel" placeholder="Contact Number" />
                    <div className="error">
                      <ErrorMessage name="contactNo" />
                    </div>
                  </div>
                  <div className="box-field">
                    <Field className="form-control" name="email" type="email" placeholder="Enter Your Email" />
                    <div className="error">
                      <ErrorMessage name="email" />
                    </div>
                  </div>
                </div>
                
                  <Field className="form-select" as="select" name="Category">
                    <option defaultValue> Category</option>
                    <option value="Business">Business</option>
                    <option value="Customer">Customer</option> 
                  </Field>
                  <div className="error">
                      <ErrorMessage name="Category" />
                    </div>
                <div className="box-field__row">
                  <span>password</span>
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
                </div>
                <label className="checkbox-box checkbox-box__sm">
                  <input type="checkbox" />
                  <span className="checkmark"></span>
                  Remember me
                </label>
                <button className="btn" type="submit">
                  registration
                </button>
                <div className="login-form__bottom">
                  <span>
                    Already have an account?{" "}
                    <a onClick={() => router.push("/login")}>Log in</a>
                  </span>
                </div>
              </Form>
            </div>
          </div>
          <img
            className="promo-video__decor js-img"
            src="/assets/img/promo-video__decor.jpg"
            alt=""
          />
        </div>
        {/* <!-- REGISTRATION EOF   -->  */}
      </Formik>


    </>
  );
};
