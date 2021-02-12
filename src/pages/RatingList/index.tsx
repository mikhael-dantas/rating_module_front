import React, { useState, useEffect } from 'react';

import { Container } from './styles'
import RatingItem, {Rating} from '../../components/RatingItem';
import Pagination from '../../components/Pagination';
import { MockedRatings } from '../../Utils/MockedApi';
import { api } from '../../services/api';

const RatingList: React.FC = () => {

    const [ratings, setRatings] = useState<Rating[]>([]);

    const [totalPages, setTotalPages] = useState(1)
    const [offset, setOffset] = useState(0)
    const limit = 20
    const currentPage = Math.ceil((offset+0.1)/limit)
    const setOffsetCallback = (page: number) => {setOffset(page*limit-limit)}

    async function setDataFromPokeApi(offset: number) {
        let error = 0
        const apiRatings = await api.get('/', { params: {offset: offset, limit: limit}}).catch(() => {
            error = 1
            console.log('error trying to get the main api. Getting mocked data instead')
            return {data: {}}
        })

        let results: Rating[] = [] 
        let count = 0

        if (error) {
            results = MockedRatings.results
            count = MockedRatings.count
        } else {
            results = apiRatings.data.results
            count = apiRatings.data.count
        }

        setRatings(results)
        const pages = Math.floor(count/20) 
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