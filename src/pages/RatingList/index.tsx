import React, { useState, useEffect } from 'react';
import {pokeApi} from '../../services/api';

import { Container } from './styles'
import RatingItem, {Rating} from '../../components/RatingItem';

const RatingList: React.FC = () => {

    const [ratings, setRatings] = useState<Rating[]>([]);
    const [totalPages, setTotalPages] = useState(1)

    async function setDataFromPokeApi(offset: number) {
        const pokes = await pokeApi.get('/', { params: {offset: offset, limit: 1}})
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
        const pages = Math.floor(pokes.data.count/20) 
        setTotalPages(pages)

    }

    function returnPagesComponent() {
        const array = Array.from(Array(totalPages).keys())
        return array.map(page => {
            let truePage = page + 1
            return (<h2 key={truePage} onClick={() => {setDataFromPokeApi(truePage*20-20)}}>{truePage}</h2>)
        })
    }

    useEffect(() => {
        setDataFromPokeApi(0)
    }, []);



    return (
        <Container>
            <h1>Lista de pokemons</h1>
            <main>
                {ratings.map((rating: Rating) => {
                    return <RatingItem key={rating.id} rating={rating} />;
                })}
            </main>
            <div className="pagination">
                {returnPagesComponent()}
            </div>
        </Container>
    );
}

export default RatingList;