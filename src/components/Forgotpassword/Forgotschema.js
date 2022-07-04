import * as Yup from 'yup';

const Forgotschema= Yup.object({
    email: Yup.string().email('Invalid email address').required('Required *'),
   
})
export default Forgotschema;