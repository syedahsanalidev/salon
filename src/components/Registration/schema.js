import * as Yup from 'yup';

const registerSchema = Yup.object({
    firstName: Yup.string()
      .max(15, 'Must be 15 characters or less')
      .required('Required *'),
    lastName: Yup.string()
      .max(20, 'Must be 20 characters or less')
      .required('Required *'),
    email: Yup.string().email('Invalid email address').required('Required'),
    // contactNo:Yup.string().required("Required *")
    //   .matches(
    //     /^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/,
    //     "Phone number is not valid"
    //   ),
      password: Yup
      .string()
      .required('Please Enter your password *')
      .matches(
        /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,})/,
        "Must Contain 8 Characters, One Uppercase, One Lowercase, One Number and One Special Case Character"
      ),
      confirmPassword: Yup.string()
      .required("Confirm password *")
      .oneOf([Yup.ref("password"), null], "Passwords must match"),
      Category: Yup .string()
      .required('Please select the category')
  });

  export default registerSchema;