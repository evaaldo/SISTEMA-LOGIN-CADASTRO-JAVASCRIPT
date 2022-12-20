import styled from "styled-components";

export const Container = styled.div`

    display: flex;
    justify-content: center;
    align-items: center;
    height: 100vh;
    min-width: 100vw;
    background-color: var(--azul-bebe);

`

export const Form = styled.form`

    display: flex;
    padding: 3em;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    background-color: var(--branco);
    border-radius: 10px;
    width: 100%;
    max-width: 450px;

    h1 {
        font-size: 2.5em;
        text-transform: uppercase;
        margin-bottom: 1em;
    }

    p {
        font-weight: 700;
        margin-bottom: .4em;
    }

    a {
        color: var(--preto);
        font-weight: 700;
        text-decoration: none;
        background-color: var(--branco);
        box-shadow: 1px 2px 5px 1px var(--preto);
        padding: 1em;
        border-radius: 10px;
        cursor: pointer;
        transition: all .2s;
        border: none;
    }

    a:hover {
        background-color: var(--azul);
        color: var(--branco);
    }

`

