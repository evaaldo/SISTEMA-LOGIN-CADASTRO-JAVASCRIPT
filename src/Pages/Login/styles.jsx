import styled from "styled-components";

export const ContainerLogin = styled.div`

    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 10px;
    background-color: var(--branco);
    padding: 3em 1.5em;
    flex-direction: column;
    width: 350px;

    h1 {
        margin-bottom: 1em;
    }

    label {
        margin: 1.5em 0 .5em 0;
        font-weight: 700;
    }

    input {
        width: 100%;
        padding: 1em 2em;
        border-radius: 10px;
        border: none;
        background-color: var(--cinza);
    }

    button {
        padding: .5em 1em;
        margin-top: 2em;
        border: none;
        border-radius: 5px;
        background-color: var(--azul);
        color: var(--branco);
        font-weight: 700;
        font-size: 1.2em;
        cursor: pointer;
        transition: .2s;
    }

    button:hover {
        background-color: var(--azul-escuro);
    }

    p {
        font-size: .8em;
        font-weight: 700;
        margin: 1em 0 .5em 0;
    }

    a {
        font-size: .7em;
        color: var(--preto);
    }

`

