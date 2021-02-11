import React from 'react';
import {ReactComponent as ReactStarsSvg} from "../../assets/images//svg/starHoles.svg"

import { Container } from './styles';

const Stars: React.FC<{stars: number}> = ({stars}) => {
    return <Container>
        <div className='stars-container'>
            <div className='stars-quantity' style={{width: `${stars*19.8}%`}}/>
            <ReactStarsSvg className='stars-svg'/>
        </div>
    </Container>;
}

export default Stars;