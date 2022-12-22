import Botao from "../../Components/Botao"
import { InputPersonalizado } from "../../Components/Input/style"
import { Container, Form } from "./styles"
import { useState } from "react"
import { validarEmail, validarSenha } from "../../Utils/Validadores"

const Login = () => {

    const [loading, setLoading] = useState(false)
    const [form, setForm] = useState([])

    const handleChange = (event) => {
        console.log(event.target.value)
        setForm({...form, [event.target.name]: event.target.value})
        console.log('form', form)
    }

    const handleSubmit = async (event) => {

        event.preventDefault()

        try {
            setLoading(true)
            alert('login')
            setLoading(false)
        } catch (err) {
            alert('Algo deu errado!' + err)
        }
    }

    const validadorInput = () => {
        return validarEmail(form.email) && validarSenha(form.password)
    }

    console.log('form está válido?', validadorInput)

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