const { createGlobalStyle } = require('styled-components');

const GlobalStyles = createGlobalStyle`
    html {
        font-family: 'Montserrat', sans-serif;
        font-weight: 300;
        color: black;  
        padding: 0;
        margin: 0;
    }

    :root {
        --colors-black: #2E2E2E;
        --box-shadow: 0px 2px 8px rgba(0, 0, 0, 0.05);
    }

    [data-theme='light'] {
        --colors-text-primary: #124a63;
        --colors-text-secondary: #b3c5cd;
        --colors-primary: #21B5B7;
        --colors-background: #f9f9f9;
        --colors-background-dark:#eef3f6;
        --colors-background-light: white;
    }

    [data-theme='dark'] {
        --colors-text-primary: #f0f0f0;
        --colors-text-secondary: #b3c5cd;
        --colors-primary: #21B5B7;
        --colors-background: #252329;
        --colors-background-dark:#3c393f;
        --colors-background-light:#120f13;
    }

    body {
        background-color: var(--colors-background);
        color: var(--colors-text-primary);
        padding: 0;
        margin: 0;
    }

    .center {
        text-align: center
    }

    a {
        color: var(--black);
        text-decoration: none;
    }
    
    * {
        box-sizing: border-box;
    }
`;

export default GlobalStyles;
