import Botao from "../../Components/Botao"
import { InputPersonalizado } from "../../Components/Input/style"
import { ContainerLogin } from "./styles"

const Login = () => {

    return(
        <div className="login">
            <ContainerLogin>
                <h1>Faça seu login</h1>
                <InputPersonalizado
                    name="email"
                    placeholder="Digite seu e-mail"
                    //onChange={handleChange}
                    type="email"
                />
                <InputPersonalizado
                    name="password"
                    placeholder="Digite sua senha"
                    //onChange={handleChange}
                    type="password"
                />
                <Botao/>
                <p>Ainda não tem uma conta?</p>
                <a href="/">Cadastre-se</a>
            </ContainerLogin>
        </div>
    )

}

export default Login