import { createGlobalStyle } from 'styled-components';

export const AppColors = {
    background: "#F0F0F7",
    primary_lighter: "#9871F5",
    primary_light: "#916BEA",
    primary: "#8257E5",
    primary_dark: "#774DD6",
    primary_darker: "#6842C2",
    secundary: "#04D361",
    secundary_dark: "#04BF58",
    title_primary: "#FFFFFF",
    text_primary: "#D4C2FF",
    text_title: "#32264D",
    text_complement: "#9C98A6",
    text_base: "#6A6180",
    line_white: "#E6E6F0",
    input_background: "#F8F8FC",
    button_text: "#FFFFFF",
    box_base: "#FFFFFF",
    box_footer: "#FAFAFC",
    footer: "#bda8ed",
    input: "#333",
    star: "#ffff00"
}

export default createGlobalStyle`

    :root {
        font-size: 60%;
    }

    * {
        margin: 0;
        padding: 0;
        outline: 0;
        box-sizing: border-box;
    }

    html,
    body,
    #root {
        min-height: 100vh;
        position: relative;
    }

    
    .container {
        /** Altura do rodapé tem que ser igual a isso aqui e vice-versa **/
        padding-bottom: 10vh;
    }

    body {
        margin: 0;
        padding: 0;
        background: ${AppColors.background};
        -webkit-font-smoothing: antialiased;
        display: flex;
        flex-direction: column;
    }

    #root {
        display: flex;
        flex-direction: column;
        align-items: center;
    }

    body,
    input,
    button,
    textarea {
        font: 500 1.6rem Poppins;
        color: ${AppColors.text_base};
    }

    /** Formulários **/
    button {
        cursor: pointer;
    }

    .button:hover {
        filter: brightness(75%);
    }





    /** Páginas menores **/

    @media (min-width: 700px) {
        :root {
            font-size: 62.5%;
        }
    }
` 