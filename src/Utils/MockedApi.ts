import { Rating } from "../components/RatingItem";

interface Response {
    count: number,
    results: Rating[]
}

interface IPokemon {
    id: number,
    name: string,
    stars_avarage: number,
}

interface PokemonsResponse {
    count: number,
    results: IPokemon[]
}

export const MockedRatings: Response = {
    count: 2,
    results: [
        {
            id: 1,
            name: 'bulbasaur',
            sprites: {
                front_default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/1.png'
            },
            title: 'bom',
            description: 'é bom memo',
            stars: 4.3,
        },
        {
            id: 2,
            name: 'pikachu',
            sprites: {
                front_default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/25.png'
            },
            title: 'muito bom',
            description: 'é bem legal',
            stars: 4.7,
        },
    ]
}

export const MockedPokemons:  PokemonsResponse = {
    count: 3,
    results: [
        {
            id: 1,
            name: 'bulbasaur',
            stars_avarage: 4.3,
        },
        {
            id: 2,
            name: 'pikachu',
            stars_avarage: 4.7,
        },
        {
            id: 3,
            name: 'charmander',
            stars_avarage: 3.7,
        },
    ]
}