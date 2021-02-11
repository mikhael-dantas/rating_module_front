import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { pokeApi } from '../../services/api';
import Stars from '../Stars';

import { Container } from './styles';

export interface Rating {
    id: number;
    id_origin: string;
    stars_avarage: number;
}


interface RatingsItemProps {
    rating: Rating;
}

const PokeItem: React.FC<RatingsItemProps> = ({ rating }) => {
    const [pokemon, setPokemon] = useState({ name: "", sprites: { front_default: "" } });

    useEffect(() => {
        pokeApi.get('/' + rating.id_origin).then(response => {
            const pokemonData = response.data

            setPokemon(pokemonData)
        })
    }, [rating.id_origin])

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
                    <Link to={`form/${pokemon.name}`}>Avalie esse Pokemon</Link>
                </p>

                <footer>
                    <p>
                        <strong>Avaliação média do Pokemon:</strong>
                    </p>
                        <Stars stars={rating.stars_avarage}/>
                </footer>
            </article>
        </Container>

    );
}


export default PokeItem;