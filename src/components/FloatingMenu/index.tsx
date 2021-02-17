import React from 'react';
import Link from 'next/link';
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
                <Link href='/pokemons/1'><a className='menu-card'>Lista de Pokemons</a></Link>
                <Link href='/ratings'><a className='menu-card'>Lista de Avaliações</a></Link>
                <Link href='/form'><a className='menu-card'>Avalie um Pokemon</a></Link>
                {/* <Link to='/config' className='menu-card'>Configurações</Link> */}
            </div>

        </Container>
    )
}

export default FloatingMenu;