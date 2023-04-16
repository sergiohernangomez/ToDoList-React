import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle `
    body {
        display: flex;
        justify-content: center;
        align-items: center;
        margin: 0;
        padding: 0;
        background-color: #242424;
        font-family: Roboto, sans-serif; 
    }
`;

export default GlobalStyle