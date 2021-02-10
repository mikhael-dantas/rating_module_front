import { createGlobalStyle } from 'styled-components'

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
    box_footer: "#FAFAFC"
}
export default createGlobalStyle`

    :root {
        font-size: 60%;
    }

    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }

    html,
    body,
    #root {
        height: 100vh;
    }

    body {
        background: ${AppColors.background};
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

    @media (min-width: 700px) {
        :root {
            font-size: 62.5%;
        }
    }
` 