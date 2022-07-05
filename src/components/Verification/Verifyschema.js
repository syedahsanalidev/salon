import * as Yup from 'yup';

const Verfiyschema= Yup.object({
    // otp: Yup.string().required('Required *'),
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
   
})
export default Verfiyschema;