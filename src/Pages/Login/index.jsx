import { InputPersonalizado } from "../../Components/Input/style"
import { ContainerLogin } from "./styles"

const Login = () => {

    return(
        <div className="login">
            <ContainerLogin>
                <h1>Faça seu login</h1>
                <InputPersonalizado/>
                <p>Ainda não tem uma conta?</p>
                <a href="/">Cadastre-se</a>
            </ContainerLogin>
        </div>
    )

}

export default Login