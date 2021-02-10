import React, { useState, useEffect } from 'react';
import {pokeApi} from '../../services/api';

import { Container } from './styles'
import RatingItem, {Rating} from '../../components/RatingItem';
import Pagination from '../../components/Pagination';

const RatingList: React.FC = () => {

    const [ratings, setRatings] = useState<Rating[]>([]);

    const [totalPages, setTotalPages] = useState(1)
    const [offset, setOffset] = useState(0)
    const limit = 20
    const currentPage = Math.ceil((offset+0.1)/limit)
    const setOffsetCallback = (page: number) => {setOffset(page*limit-limit)}

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


    useEffect(() => {
        setDataFromPokeApi(offset)
    }, [offset]);



    return (
        <Container>
            <h1>Avaliações</h1>
            <main>
                {ratings.map((rating: Rating) => {
                    return <RatingItem key={rating.id} rating={rating} />;
                })}
            </main>
            <Pagination pages={totalPages} callback={setOffsetCallback} currentPage={currentPage}/>
        </Container>
    );
}

export default RatingList;