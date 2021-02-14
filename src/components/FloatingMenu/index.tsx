import React from 'react';
import { Link } from 'react-router-dom';
import { Container } from './styles';


const FloatingMenu: React.FC<{
    changeVisibilityFunc: VoidFunction,
    visible: boolean
}> = ({changeVisibilityFunc, visible}) => {
    return (
        <Container 
            onClick={changeVisibilityFunc} 
            style={{display: visible ? 'initial' : 'none'}}
        >
            <div className='menu'>
                <Link to='/pokelist' className='menu-card'>Lista de Pokemons</Link>
                <Link to='/ratings' className='menu-card'>Lista de Avaliações</Link>
                <Link to='/form' className='menu-card'>Avalie um Pokemon</Link>
                {/* <Link to='/config' className='menu-card'>Configurações</Link> */}
            </div>

        </Container>
    )
}

export default FloatingMenu;