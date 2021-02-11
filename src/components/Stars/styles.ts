import styled from 'styled-components';

export const Container = styled.div`
    .stars-container {
        z-index: 0;
        position: relative;
        width: 20rem;
        height:4rem;
        
    }
    .stars-quantity {
        position: absolute;
        background: yellow;
        top: 1px;
        left: 1px;
        bottom: 1px;
    }
    .stars-svg {
        position: absolute;
        width: 100%;
        height: 100%;
    }
`;
