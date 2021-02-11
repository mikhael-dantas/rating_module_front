import styled from "styled-components";
import { AppColors } from "../../assets/styles/global";

export const Container = styled.div`
    position: absolute;
    width: 100vw;
    height: 100vh;
    background: rgba(0, 0, 0, 0.7);
    z-index: 1;
    .menu {
        width: 100%;
        height: 100%;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
    }
    .menu-card {
        position: relative;
        display: block;
        background: ${AppColors.primary};
        height: 12rem;
        width: 20rem;
        display: flex;
        text-decoration: none;
        align-items: center;
        justify-content:center;
        color: ${AppColors.title_primary};
        font-weight: bold;
    }
    .menu-card + .menu-card {
        margin-top: 2rem;
    }
`