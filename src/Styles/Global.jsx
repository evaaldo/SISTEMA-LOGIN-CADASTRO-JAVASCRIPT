import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`

    @import url('https://fonts.googleapis.com/css2?family=Poppins:wght@200;400;500;600;700&family=Roboto:wght@300;400;500;700;900&display=swap');

    :root {
        --branco: #fff;
        --preto: #000;
        --azul-bebe: #ADA2FF;
        --preto-fundo: #202020;
        --cinza: #B2B2B2;
        --azul: #4B56D2;
        --azul-escuro: #263159;
    }

    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }

    body {
        width: 100vw;
        height: 100vh;
        font-family: 'Poppins', sans-serif;
    }

`

export default GlobalStyle

