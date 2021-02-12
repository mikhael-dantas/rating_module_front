import React, { useState, useEffect } from 'react';
import {pokeApi} from '../../services/api';

import { Container } from './styles'
import RatingItem, {Rating} from '../../components/RatingItem';
import Pagination from '../../components/Pagination';
import { MockedRatings } from '../../Utils/MockedApi';

const RatingList: React.FC = () => {

    const [ratings, setRatings] = useState<Rating[]>([]);

    const [totalPages, setTotalPages] = useState(1)
    const [offset, setOffset] = useState(0)
    const limit = 20
    const currentPage = Math.ceil((offset+0.1)/limit)
    const setOffsetCallback = (page: number) => {setOffset(page*limit-limit)}

    async function setDataFromPokeApi(offset: number) {
        // const apiRatings = await Api.get('/', { params: {offset: offset, limit: limit}})
        setRatings(MockedRatings.data)
        const pages = Math.floor(MockedRatings.count/20) 
        setTotalPages(pages)

    }


    useEffect(() => {
        setDataFromPokeApi(offset)
    }, [offset]);



    return (
        <Container className='container'>
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