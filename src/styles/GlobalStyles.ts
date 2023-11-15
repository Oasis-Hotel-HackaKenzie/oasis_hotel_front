import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`

    * {
        margin:0;
        padding: 0;
        outline:0;
        box-sizing: border-box;
    }

    :root{
        --color-primary: #FFDCB4;
        --color-secondary: #019992;

        --color-grey-04: #212529;
        --color-grey-03: #868E96;
        --color-grey-02: #E9ECEF;
        --color-grey-01: #F8F9FA;

    }

    body {
        background: var(--color-grey-01);
        color: var(--color-grey-04);
        -webkit-font-smoothing: antialiased;
        overflow-x: hidden;
    }

    body, input, button, textarea {
        font-family: 'Poppins', sans-serif;
    }

    button {
        cursor: pointer;
    }

    ul {
        list-style: none;
    }
    
    // section titles
    h1 {
        font-size: 2.3rem;
        font-weight: 500;
    }
    //nome quartos
    h2 {
        font-size: 2rem;
        font-weight: 700;
    }
    //title modals
    h3 {
        font-size: 1.3rem;
        font-weight: 500;
    }
    //textos
    p {
        font-size: 1rem;
        font-weight: 300;
    }
    //form errors
    small {
        font-size: 0.75rem;
        font-weight: 400;
    }
`