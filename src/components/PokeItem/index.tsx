import React from 'react';
// import { Link } from 'react-router-dom';
import Stars from '../Stars';

import { Container } from './styles';


interface PokeItemProps {
    listedPoke: any;
}

const PokeItem: React.FC<PokeItemProps> = ({ listedPoke: pokemon }) => {
    return (
        <Container>
            <article className="rating-item">
                <header>
                    <img src={pokemon.sprites.front_default} alt={pokemon.name} />
                    <div>
                        <h2>{pokemon.name}</h2>
                        {/* <span>{rating.title}</span> */}
                    </div>
                </header>

                <p>
                    {/* <Link to={`form/${pokemon.name}`}>Avalie esse Pokemon</Link> */}
                </p>

                <footer>
                    <p>
                        <strong>Avaliação média do Pokemon:</strong>
                    </p>
                        <Stars stars={Number(pokemon.stars_avarage)}/>
                </footer>
            </article>
        </Container>

    );
}


export default PokeItem;