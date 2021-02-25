import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/router'

import Container from './styles'
import PokemonListItem from '../../components/PokemonListItem';
import Pagination from '../../components/Pagination';
import { MockedPokemons } from '../../Utils/MockedApi';
// import axios from 'axios';

const Pokemons: React.FC<any> = () => {
    const router = useRouter()
    const originPage = router.query.page

    function checkPage() {
        let bool = false
        if (typeof originPage === "string") {
            bool = Number.isNaN(parseInt(originPage)) ? false : true
        }
        return bool
    }

    const page = checkPage() ? Number(originPage) : 1 
    const itensPerPage = 15

    const [pokes, setPokes] = useState([])
    const [totalPages, setTotalPages] = useState(0)

    
    useEffect(() => {
        async function requestPokemonInfos() {
            // const apiPokeList = await pokeApi.get('/', { params: {offset: page*itensPerPage-itensPerPage, limit: itensPerPage}})
            const apiPokeList = MockedPokemons
            const pokesWithImages = await Promise.all(apiPokeList.results.map(async (pokemon: any) => {
                // const returnedPokemon = await axios.get((pokemon.name)
                return {
                    name: pokemon.name,
                    stars_avarage: pokemon.stars_avarage,
                    sprites: {front_default: "returnedPokemon.results.image_url"}
                }
            }))
        
            const calcPages = Math.ceil(apiPokeList.count/itensPerPage) 
        
            setPokes(pokesWithImages)
            setTotalPages(calcPages)
        }
        requestPokemonInfos()
    }, [])

    return (
        <Container className='container'>
            <h1>Lista de pokemons</h1>
            <main>
                {pokes.map((listedPoke: any) => {
                    return <PokemonListItem key={listedPoke.name} listedPoke={listedPoke} />;
                })}
            </main>
            <Pagination pages={totalPages} resource='/pokemons/' currentPage={page}/>
        </Container>
    );
}

export default Pokemons;