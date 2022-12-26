import styled from "styled-components";

export const BotaoPersonalizado = styled.button`

    color: var(--branco);
    font-weight: 700;
    text-decoration: none;
    background-color: var(--azul);
    box-shadow: 1px 2px 5px 1px var(--preto);
    padding: 1em;
    border-radius: 10px;
    cursor: pointer;
    transition: all .2s;
    border: none;
    font-size: 1em;
    width: 100%;

    ${props => props.disabled === false &&`
        &:hover {
            background-color: var(--branco);
            color: var(--preto);
        }
    `}

${props => props.disabled &&`
        opacity: 0.7;
    `}

`

