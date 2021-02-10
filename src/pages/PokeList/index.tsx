import React, { useState, useEffect } from 'react';
import {pokeApi} from '../../services/api';

import { Container } from './styles'
import PokeItem, {Rating} from '../../components/PokeItem';
import Pagination from '../../components/Pagination';

const PokeList: React.FC = () => {

    const [ratings, setRatings] = useState<Rating[]>([]);

    const [totalPages, setTotalPages] = useState(1)
    const [offset, setOffset] = useState(0)
    const limit = 20
    const currentPage = offset === 0 ? 1 : Math.ceil(offset/limit)
    const setOffsetCallback = (page: number) => {setOffset(page*limit-limit)}

    async function setDataFromPokeApi(offset: number) {
        const pokes = await pokeApi.get('/', { params: {offset: offset, limit: 1}})
        const organizedPokes = pokes.data.results.map((poke: any, index: number) => {
            return {
                id: index,
                id_origin: poke.name,
                stars_avarage: 5
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
            <h1>Lista de pokemons</h1>
            <main>
                {ratings.map((rating: Rating) => {
                    return <PokeItem key={rating.id} rating={rating} />;
                })}
            </main>
            <Pagination pages={totalPages} callback={setOffsetCallback} currentPage={currentPage}/>
        </Container>
    );
}

export default PokeList;