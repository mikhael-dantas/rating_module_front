import { Rating } from "../components/RatingItem";

interface Response {
    count: number,
    data: Rating[]
}

export const MockedRatings: Response = {
    count: 2,
    data: [
        {
            id: 1,
            id_origin: 'bulbasaur',
            title: 'bom',
            description: 'é bom memo',
            stars: 4.3,
        },
        {
            id: 2,
            id_origin: 'pikachu',
            title: 'muito bom',
            description: 'é bem legal',
            stars: 4.7,
        },
    ]
}
