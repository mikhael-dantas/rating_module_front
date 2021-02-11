import styled from "styled-components";
import { AppColors } from "../../assets/styles/global";


export const Container = styled.article`
    a {
        text-decoration: none;
    }
    .rating-star {
        width: 4rem;
        height: 4rem;
    }

    .rating-item {
        background: ${AppColors.box_base};
        border: 1px solid ${AppColors.line_white};
        border-radius: 0.8rem;
        margin-top: 2.4rem;
        overflow: hidden;
    }

    .rating-item header {
        padding: 3.2rem 2rem;
        display: flex;
        align-items: center;
    }

    .rating-item header img {
        width: 8rem;
        height: 8rem;
        border-radius: 50%;
    }

    .rating-item header div {
        margin-left: 2.4rem;
    }

    .rating-item header div strong {
        font: 700 2.4rem Archivo;
        display: block;
        color: ${AppColors.text_title};
    }

    .rating-item header div span {
        font-size: 1.6rem;
        display: block;
        margin-top: 0.4rem;
    }

    .rating-item>p {
        padding: 0 2rem;
        font-size: 1.6rem;
        line-height: 2.8rem;
    }

    .rating-item footer {
        padding: 3.2rem 2rem;
        background: ${AppColors.box_footer};
        border-top: 1px solid ${AppColors.line_white};
        margin-top: 3.2rem;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: space-between;
    }

    .rating-item footer p strong {
        color: ${AppColors.primary};
        font-size: 1.6rem;
        display: block;
    }

    .rating-item footer a {
        width: 20rem;
        height: 5.6rem;
        background: ${AppColors.secundary};
        color: ${AppColors.button_text};
        border: 0;
        border-radius: 0.8rem;
        cursor: pointer;
        font: 700 1.4rem Archivo;
        display: flex;
        align-items: center;
        justify-content: space-evenly;
        transition: 0.2s;
        text-decoration: none;
    }

    .rating-item footer a:hover {
        background: ${AppColors.secundary_dark};
    }

    @media (min-width: 700px) {
        .rating-item header,
        .rating-item footer {
            padding: 3.2rem;
        }
        .rating-item>p {
            padding: 0 3.2rem;
        }
        .rating-item footer p strong {
            display: initial;
            margin-left: 1.6rem;
        }
        .rating-item footer button {
            width: 24.5rem;
            font-size: 1.6rem;
            justify-content: center;
        }
        .rating-item footer button img {
            margin-right: 1.6rem;
        }
    }
`