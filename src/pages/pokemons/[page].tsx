import React, { useState, useEffect } from 'react';
// import {api, pokeApi} from '../../services/api';

import { Container } from './styles'
import PokemonListItem from '../../components/PokemonListItem';
import Pagination from '../../components/Pagination';
import { pokeApi } from '../../services/api';

export async function getStaticPaths() {
    return {
        paths: [
        { params: { page: '1'} },
        { params: { page: '2'} },
        { params: { page: '3'} },
        ],
        fallback: false
    };
}

export async function getStaticProps(context: any) {
    const page = context.params.page
    const apiPokeList = await pokeApi.get('/', { params: {offset: page*20, limit: 20}})
    const totalpages = Math.floor(apiPokeList.data.count/20) 
    return {props: {
        page: page,
        pokes: apiPokeList.data.results.map((pokemon: any) => {return {id: 1, name: pokemon.name, stars_avarage: 4, sprites: {front_default: ''}}}),
        totalpages: totalpages
    }}
}

const Pokemons: React.FC<any> = (props) => {

    // const [list, setList] = useState<any[]>([{id: 1, name: 'pikachu', stars_avarage: 4, sprites: {front_default: ''}}]);

    // const [offset, setOffset] = useState(0)
    // const limit = 20
    // const currentPage = Math.ceil((offset+0.1)/limit)
    // const setOffsetCallback = (page: number) => {setOffset(page*limit-limit)}

    // useEffect(() => {
    //     // async function setDataFromApi(offsetArg: number) {
    //     //     let error = 0
    //     //     let organizedPokeList: any[] = []
    
    //     //     let apiPokeList = await api.get('/pokemons', { params: {offset: offsetArg, limit: 1}}).catch(() => {
    //     //         console.log('error trying to get the main api. Getting data from pokeapi instead')
    //     //         error = 1
    //     //         return {data: {}}
    //     //     })

    //     //     if (error) {
    //     //         apiPokeList = await pokeApi.get('/', { params: {offset: offsetArg, limit: 1}})

    //     //         organizedPokeList = await Promise.all(apiPokeList.data.results.map(async (poke: any) => {
    //     //             const response = await pokeApi.get('/' + poke.name)
    //     //             response.data.stars_avarage = 4.7
    //     //             return response.data
    //     //         }))
    //     //     } else {
    //     //         organizedPokeList = apiPokeList.data.results
    //     //     }

    //     //     setList(organizedPokeList)
    //     //     const pages = Math.floor(apiPokeList.data.count/20) 
    //     //     setTotalPages(pages)
    //     // }
    //     // setDataFromApi(offset)
    // }, [offset]);

    console.log(props.page)
    return (
        <Container className='container'>
            <h1>Lista de pokemons</h1>
            <main>
                {props.pokes.map((listedPoke: any) => {
                    return <PokemonListItem key={listedPoke.name} listedPoke={listedPoke} />;
                })}
            </main>
            {/* <Pagination pages={props.totalpages} callback={setOffsetCallback} currentPage={currentPage}/> */}
        </Container>
    );
}

export default Pokemons;