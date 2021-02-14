import styled from 'styled-components';
import { AppColors } from '../../assets/styles/global';

export const Container = styled.div`

    background: ${AppColors.footer};
    width: 100%;
    
    /** Altura do rodapé tem que ser igual a isso aqui e vice-versa **/
    height: 10vh;
    position: absolute;
    bottom: 0;
    left: 0;
`;
