import * as Yup from 'yup';

const loginschema= Yup.object({
    email: Yup.string().email('Invalid email address').required('Required *'),
    password: Yup.string()
      .required('Please Enter your password *')
      .matches(
        /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,})/,
        "Must Contain 8 Characters, One Uppercase, One Lowercase, One Number and One Special Case Character"
      ),
})
export default loginschema;