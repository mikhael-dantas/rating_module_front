import React from 'react';
import Stars from '../Stars';

import { Container } from './styles';

export interface Rating {
    id: number;
    name: string;
    sprites: {
        front_default: string
    },
    title: string;
    description: string;
    stars: number;
}


interface RatingsItemProps {
    rating: Rating;
}


const RatingItem: React.FC<RatingsItemProps> = ({ rating }) => {
    return (
        <Container>

            <article className="rating-item">
                <header>
                    <img src={rating.sprites.front_default} alt={rating.name} />
                    <div>
                        <h2>{rating.name}</h2>
                        <span>{rating.title}</span>
                    </div>
                </header>

                <p>{rating.description}</p>

                <footer>
                    <p>
                        <strong>Avaliação dada:</strong>
                    </p>
                        <Stars stars={rating.stars}/>
                </footer>
            </article>
        </Container>

    );
}


export default RatingItem;