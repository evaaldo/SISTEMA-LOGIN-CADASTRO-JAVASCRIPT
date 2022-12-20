import { BotaoPersonalizado } from "./style"

const Botao = ({
    type,
    text,
    onClick,
    //disabled
}) => {

    return(
        <BotaoPersonalizado
            type={type}
            text={text}
            onClick={onClick}
        >
            {text}
        </BotaoPersonalizado>
    )

}

export default Botao
