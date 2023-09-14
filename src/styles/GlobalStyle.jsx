import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
    html{
        --color-primary: #784A62;
        --color-secondary: #452B3B;
        height: 100%;
    }

    body{
        height: 100%;
        margin: 0;
        font-family: Tahoma,Verdana,Segoe,sans-serif; 
    }

    h1{
        font-family:  Georgia,Times,Times New Roman,serif;
        font-weight: normal;
    }

    main a{
        color: #0A5485;
        font-family:  Verdana,Geneva,sans-serif; 
        font-style: italic;
        text-decoration: none;
        &:hover{
            text-decoration: underline;
        }
    }
`;

export default GlobalStyle;
