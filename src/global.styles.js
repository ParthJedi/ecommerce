import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
    body {
        font-family: 'Open Sans', sans-serif;
        padding: 0 70px;

        @media screen and (max-width: 800px) {
            padding: 10px;
        }
    }
    
    a {
        text-decoration: none !important;
        color: black;
    }
    
    * {
        box-sizing: border-box;
    }
`;