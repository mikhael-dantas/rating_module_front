import React, { useEffect, useState } from 'react';

import Container from './styles'
import PokemonListItem from '../../components/PokemonListItem';
import Pagination from '../../components/Pagination';
import { MockedPokemons } from '../../Utils/MockedApi';
import axios from 'axios';

export async function getStaticPaths() {
    return {
        paths: [
        { params: { page: '1'} },
        { params: { page: '2'} },
        { params: { page: '3'} },
        { params: { page: '4'} },
        ],
        fallback: true
    };
}

export async function getStaticProps(context: any) {
    const page = context.params.page
    const itensPerPage = 15

    // const apiPokeList = await pokeApi.get('/', { params: {offset: page*itensPerPage-itensPerPage, limit: itensPerPage}})
    const apiPokeList = MockedPokemons

    const pokesWithImages = await Promise.all(apiPokeList.results.map(async (pokemon: any) => {
        const pokemonObject = await axios.get(`http://localhost:3000/api/pokemons/${pokemon.name}`)
        return {
            name: pokemon.name,
            stars_avarage: pokemon.stars_avarage,
            sprites: {front_default: pokemonObject.data.results.image_url}
        }
    }))

    const totalpages = Math.floor(apiPokeList.count/itensPerPage) 

    return {props: {
        page: page,
        pokes: pokesWithImages,
        totalpages: totalpages
    }}
}

const Pokemons: React.FC<any> = (props) => {
    const [pokes, setPokes] = useState([])
    useEffect(() => {
        setPokes(props.pokes)
    }, [])
    return (
        <Container className='container'>
            <h1>Lista de pokemons</h1>
            <main>
                {pokes.map((listedPoke: any) => {
                    return <PokemonListItem key={listedPoke.name} listedPoke={listedPoke} />;
                })}
            </main>
            <Pagination pages={props.totalpages} resource='/pokemons/' currentPage={props.page}/>
        </Container>
    );
}

export default Pokemons;