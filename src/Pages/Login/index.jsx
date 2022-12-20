import Botao from "../../Components/Botao"
import { InputPersonalizado } from "../../Components/Input/style"
import { Container, Form } from "./styles"

const Login = () => {

    const handleChange = (event) => {
        console.log(event.target.value)
    }

    const handleSubmit = async () => {
        alert('login')
    }

    return(
        <Container>
            <Form>
                <h1>Login</h1>
                <p>User</p>
                <InputPersonalizado
                    name='email'
                    placeholder='Type your user'
                    onChange={handleChange}
                    type='email'
                />
                <p>Password</p>
                <InputPersonalizado
                    name='password'
                    placeholder='Type your password'
                    onChange={handleChange}
                    type='password'
                />
                <Botao
                    text='Sign in'
                    type="submit"
                    onClick={handleSubmit}
                    //disabled
                />
            </Form>
        </Container>
    )

}

export default Login