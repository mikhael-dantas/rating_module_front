import React, { useState } from 'react';
import Link from 'next/link'
import FloatingMenu from '../FloatingMenu';

import { Container } from './styles';

import { AiFillHome } from 'react-icons/ai';
import { GiHamburgerMenu } from 'react-icons/gi'
// import { BsFillGearFill } from 'react-icons/bs'

const Header: React.FC = () => {
    const [visible, setVisible] = useState<boolean>(false)

    function changeVisibility() {
        setVisible(!visible)
    }

    return (
        <Container>
            <div className='menu-buttons'>
                <div style={{cursor: 'pointer'}} onClick={changeVisibility} className='button'>
                    <GiHamburgerMenu color='white' size='3rem'/>
                </div>
            </div>

            <div className='tittle-container'>
                PokeRank
            </div>

            <div className='config-buttons'>
                <Link href='/'>
                    <a className='button'>
                        <AiFillHome color='white' size='3rem' />
                    </a>
                </Link>
            </div>
            
            <FloatingMenu changeVisibilityFunc={changeVisibility} visible={visible}/>
        </Container>
    )
}

export default Header;