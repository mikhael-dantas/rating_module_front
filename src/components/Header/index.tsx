import React from 'react';

// import { Container } from './styles'
import { HeaderBar } from './styles';

const Header: React.FC = () => {
    return <HeaderBar>
        <div className='menu-buttons'>M</div>
        <div className='tittle-container'>
            PokeRank
        </div>
    </HeaderBar>
}

export default Header;