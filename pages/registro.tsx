import { NextPage } from "next"
import RegisterForm from "~/components/register/RegisterForm"

// Corresponde a la ruta http://.../registro
const RegisterPage: NextPage = () => {
  return (
    <RegisterForm/>
  )
}

export default RegisterPage