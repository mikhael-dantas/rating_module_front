import React, { useState, useEffect } from 'react';
import {pokeApi} from '../../services/api';

import RatingItem, { Rating } from '../../components/RatingItem';
import './styles.css'

const Home: React.FC = () => {

    const [ratings, setRatings] = useState<Rating[]>([]);

    useEffect(() => {
        async function setDataFromPokeApi() {
            const pokes = await pokeApi.get('/', { params: {offset: 0, limit: 1}})
            const organizedPokes = pokes.data.results.map((poke: any, index: number) => {
                return {
                    id: index,
                    id_origin: poke.name,
                    title: 'muito bom',
                    description: 'esse pokemon é legal',
                    stars: 5
                }
            })
            setRatings(organizedPokes)
        }

        setDataFromPokeApi()
    }, []);



    return (
        <div id="rating-list-page" className="container">
            <h1>Lista de pokemons</h1>
            <main>
                {ratings.map((rating: Rating) => {
                    return <RatingItem key={rating.id} rating={rating} />;
                })}
            </main>
        </div>
    );
}

export default Home;