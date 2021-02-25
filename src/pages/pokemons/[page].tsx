import React, { useEffect, useState } from 'react';

import Container from './styles'
// import PokemonListItem from '../../components/PokemonListItem';
// import Pagination from '../../components/Pagination';
// import { MockedPokemons } from '../../Utils/MockedApi';
// import dbConnect from '../../database/DbConection'
// import Pokemon from '../../database/models/Pokemon'

// export async function getStaticPaths() {
//     return {
//         paths: [
//         { params: { page: '1'} },
//         { params: { page: '2'} },
//         { params: { page: '3'} },
//         { params: { page: '4'} },
//         ],
//         fallback: true
//     };
// }

// export async function getStaticProps(context: any) {
//     const page = context.params.page
//     const itensPerPage = 15

//     // const apiPokeList = await pokeApi.get('/', { params: {offset: page*itensPerPage-itensPerPage, limit: itensPerPage}})
//     const apiPokeList = MockedPokemons

//     async function handler(name: string) {
    
//         await dbConnect()
    
//         try {
//             const pokemon = await Pokemon.findOne({name: name})
//             if (!pokemon) {
//                 return {message: 'pokemon not found'}
//             }
//             return { success: true, results: pokemon }
//         } catch (error) {
//             console.log(error)
//             { success: false }
//         }
//     }

//     const pokesWithImages = await Promise.all(apiPokeList.results.map(async (pokemon: any) => {
//         const pokemonObject = await handler(pokemon.name)
//         return {
//             name: pokemon.name,
//             stars_avarage: pokemon.stars_avarage,
//             sprites: {front_default: pokemonObject.results.image_url}
//         }
//     }))

//     const totalpages = Math.floor(apiPokeList.count/itensPerPage) 

//     return {props: {
//         page: page,
//         pokes: pokesWithImages,
//         totalpages: totalpages
//     }}
// }

const Pokemons: React.FC<any> = (props) => {
    // const [pokes, setPokes] = useState([])
    // useEffect(() => {
    //     setPokes(props.pokes)
    // }, [])
    return (
        <Container className='container'>
            <h1>Lista de pokemons</h1>
            {/* <main>
                {pokes.map((listedPoke: any) => {
                    return <PokemonListItem key={listedPoke.name} listedPoke={listedPoke} />;
                })}
            </main>
            <Pagination pages={props.totalpages} resource='/pokemons/' currentPage={props.page}/> */}
        </Container>
    );
}

export default Pokemons;