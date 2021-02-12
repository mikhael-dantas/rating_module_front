import React, { useState, useEffect } from 'react';
import {api, pokeApi} from '../../services/api';

import { Container } from './styles'
import PokeItem from '../../components/PokeItem';
import Pagination from '../../components/Pagination';

const PokeList: React.FC = () => {

    const [list, setList] = useState<any[]>([]);

    const [totalPages, setTotalPages] = useState(1)
    const [offset, setOffset] = useState(0)
    const limit = 20
    const currentPage = Math.ceil((offset+0.1)/limit)
    const setOffsetCallback = (page: number) => {setOffset(page*limit-limit)}

    useEffect(() => {
        async function setDataFromApi(offsetArg: number) {
            let error = 0
            let organizedPokeList: any[] = []
    
            let apiPokeList = await api.get('/pokemons', { params: {offset: offsetArg, limit: 1}}).catch(() => {
                console.log('error trying to catch the main api. Getting data from pokeapi instead')
                error = 1
                return {data: {}}
            })

            if (error) {
                apiPokeList = await pokeApi.get('/', { params: {offset: offsetArg, limit: 1}})

                organizedPokeList = await Promise.all(apiPokeList.data.results.map(async (poke: any) => {
                    const response = await pokeApi.get('/' + poke.name)
                    response.data.stars_avarage = 4.7
                    return response.data
                }))
            } else {
                organizedPokeList = apiPokeList.data.results
            }

            setList(organizedPokeList)
            const pages = Math.floor(apiPokeList.data.count/20) 
            setTotalPages(pages)
        }
        setDataFromApi(offset)
    }, [offset]);

    return (
        <Container className='container'>
            <h1>Lista de pokemons</h1>
            <main>
                {list.map((listedPoke: any) => {
                    return <PokeItem key={listedPoke.id} listedPoke={listedPoke} />;
                })}
            </main>
            <Pagination pages={totalPages} callback={setOffsetCallback} currentPage={currentPage}/>
        </Container>
    );
}

export default PokeList;