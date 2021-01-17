import React, { useEffect, useState } from 'react';

import './styles.css';

export interface Rating {
    id: number;
    id_origin: string;
    title: string;
    description: string;
    starts: number;
}


interface RatingesItemProps {
    rating: Rating;
}


const RatingItem: React.FC<RatingesItemProps> = ({ rating }) => {


    const baseUrl = 'https://pokeapi.co/api/v2/pokemon/';

    const [pokemon, setPokemon] = useState({});

    useEffect(() => {

        fetch(baseUrl + rating.id_origin).then(response =>
            response.json())
            .then(data => {
                setPokemon(data);
            })
            .catch(err => console.log(err));
    }, [pokemon]);

    return (

        <article className="rating-item">
            <header>
                <img src={pokemon.sprites.front_default} alt={pokemon.name} />
                <div>
                    <h2>pokemon.name</h2>
                    <strong>{rating.id_origin}</strong>
                    <span>{rating.title}</span>
                </div>
            </header>

            <p>{rating.description}</p>

            <footer>
                <p>
                    <strong></strong>
                </p>

            </footer>
        </article>

    );
}


export default RatingItem;