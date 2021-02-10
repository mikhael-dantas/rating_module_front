import styled from "styled-components";
import { AppColors } from "../../assets/styles/global";

export const Container = styled.header`
    width: 100%;
    height: 4.5rem;
    background: ${AppColors.primary};
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    .menu-buttons {
        width: 100%;
        display: flex;
        align-items: center;
        .button {
            margin-left: .5rem;
            height: 3.8rem;
            width: 2.8rem;
            display: flex;
            align-items: center;
        }
        .button + .button {
            margin-left: .7rem;
        }
    }
    .tittle-container {
        color: ${AppColors.title_primary};
        display: flex;
        align-items: center;
        justify-content: center;
        font-size: 2rem;
        font-weight: bold;
    }
    .config-buttons {
        display: flex;
        align-items: center;
        justify-content: flex-end;
        .config-button {
            text-decoration: none;
            margin-right: .7rem;
        }
    }
`
