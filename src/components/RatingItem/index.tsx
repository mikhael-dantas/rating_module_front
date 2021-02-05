import React, { useEffect, useState } from 'react';
import { pokeApi } from '../../services/api';

import './styles.css';

export interface Rating {
    id: number;
    id_origin: string;
    title: string;
    description: string;
    stars: number;
}


interface RatingsItemProps {
    rating: Rating;
}


const RatingItem: React.FC<RatingsItemProps> = ({ rating }) => {
    const [pokemon, setPokemon] = useState({ name: "", sprites: { front_default: "" } });

    useEffect(() => {
        pokeApi.get('/' + rating.id_origin).then(response => {
            const pokemonData = response.data

            setPokemon(pokemonData)
        })
    }, [rating.id_origin])
    console.log(pokemon);

    return (

        <article className="rating-item">
            <header>
                <img src={pokemon.sprites.front_default} alt={pokemon.name} />
                <div>
                    <h2>{pokemon.name}</h2>
                    <strong>{rating.id_origin}</strong>
                    <span>{rating.title}</span>
                </div>
            </header>

            <p>{rating.description}</p>

            <footer>
                <p>
                    <strong>Avaliação média:</strong>
                    {
                        Array.from({ length: rating.stars }, (x, i) => {
                            return (
                                <img className='rating-star' key={i} alt='star' src='https://pt.seaicons.com/wp-content/uploads/2015/07/star-icon1.png'/>
                            )
                        })
                    }
                </p>
            </footer>
        </article>

    );
}


export default RatingItem;