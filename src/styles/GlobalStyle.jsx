import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
    html, body{
        height: 100%;
    }

    html{
        --color-primary: #784A62;
        --color-secondary: #452B3B;
    }

    body{
        margin: 0;
        font-family: Tahoma,Verdana,Segoe,sans-serif; 
    }

    h1{
        font-family:  Georgia,Times,Times New Roman,serif;
        font-weight: normal;
    }
`;

export default GlobalStyle;
