import React from 'react';

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
        { params: { page: '4'} },
        ],
        fallback: true
    };
}

export async function getStaticProps(context: any) {
    const page = context.params.page
    const itensPerPage = 15

    const apiPokeList = await pokeApi.get('/', { params: {offset: page*itensPerPage-itensPerPage, limit: itensPerPage}})

    const pokesWithImages = await Promise.all(apiPokeList.data.results.map(async (pokemon: any) => {
        const pokemonObject = await pokeApi.get(`/${pokemon.name}`)
        return {
            name: pokemon.name,
            stars_avarage: 4,
            sprites: {front_default: pokemonObject.data.sprites.front_default}
        }
    }))

    const totalpages = Math.floor(apiPokeList.data.count/itensPerPage) 

    return {props: {
        page: page,
        pokes: pokesWithImages,
        totalpages: totalpages
    }}
}

const Pokemons: React.FC<any> = (props) => {
    console.log(props.page)
    return (
        <Container className='container'>
            <h1>Lista de pokemons</h1>
            <main>
                {props.pokes.map((listedPoke: any) => {
                    return <PokemonListItem key={listedPoke.name} listedPoke={listedPoke} />;
                })}
            </main>
            <Pagination pages={props.totalpages} resource='/pokemons/' currentPage={props.page}/>
        </Container>
    );
}

export default Pokemons;