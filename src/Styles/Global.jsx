import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`

    @import url('https://fonts.googleapis.com/css2?family=Poppins:wght@200;400;500;600;700&family=Roboto:wght@300;400;500;700;900&display=swap');

    :root {
        --branco: #fff;
        --preto: #000;
        --azul-bebe: #ADA2FF;
        --preto-fundo: #202020;
    }

    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }

    body {
        width: 100vw;
        height: 100vh;
        display: flex;
        justify-content: center;
        align-items: center;
        font-family: 'Roboto', sans-serif;
        background-color: var(--azul-bebe);
    }

`

export default GlobalStyle

