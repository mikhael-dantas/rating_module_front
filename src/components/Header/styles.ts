import styled from "styled-components";
import { AppColors } from "../../assets/styles/global";

export const HeaderBar = styled.header`
    width: 100%;
    height: 4rem;
    background: ${AppColors.primary};
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    .menu-buttons {
        width: 5rem;
        background-color: yellow;
    }
    .tittle-container {
        color: ${AppColors.title_primary};
        text-align: center;
        font-size: 2rem;
        font-weight: bold;
    }
`
