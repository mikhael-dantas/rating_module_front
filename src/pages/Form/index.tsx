import axios from 'axios';
import React, { useState, useEffect } from 'react';
// import { api, pokeApi } from '../../services/api';
import Container from './styles';

export async function getStaticProps(context: any) {
    let nextUrl = "https://pokeapi.co/api/v2/pokemon?limit=200&offset=0"

                const listOfPokemons: string[] = []
                for (let index = 0; index < 8; index++) {
                    if (!nextUrl) {break}
                    const pokeapireponse = await axios.get(nextUrl)
                    nextUrl = pokeapireponse.data.next
                    const results = pokeapireponse.data.results
                    results.forEach((pokemonFromResults: any) => {
                        listOfPokemons.push(pokemonFromResults.name)
                    })
                }

    return {props: {
        listOfPokemons: listOfPokemons
    }}
}

const Form: React.FC<any> = (props) => {
    const [pokemonName, setPokemonName] = useState<string>('')
    const [title, setTitle] = useState<string>('')
    const [description, setDescription] = useState<string>('')
    const [stars, setStars] = useState<number>(0)


    async function handleSubmit(e: any) {
        e.preventDefault()

        const dataToPost = {
            pokemonName: pokemonName,
            title: title,
            description: description,
            stars: stars
        }
        console.log(dataToPost)

        // let apiPost = await api.post('/ratings', dataToPost).catch(() => {
        //     console.log('error trying to post in main api. Logging form instead')
        //     console.log(dataToPost)
        //     return { data: {}, status: Number }
        // })

        // if (apiPost)
        //     alert(apiPost.data.message)
    }


    useEffect(() => {
    }, []);

    return (
        <Container className='container'>
            <div className="content">
                <section>
                    <h1>Enviar Avaliação</h1>
                </section>

                <form className='poke-form' onSubmit={(e) => handleSubmit(e)}>

                    <select
                        placeholder="Selecione o Pokemon"
                        name="pokemonName"
                        value={pokemonName}
                        onChange={(e) => { setPokemonName(e.target.value) }}
                    >
                        {props.listOfPokemons.map((poke: any) => (
                            <option key={poke} value={poke}>{poke}</option>
                        ))}
                    </select>

                    <input type="text" placeholder="Título da Avaliação" name='title' value={title} onChange={(e) => { setTitle(e.target.value) }} required />
                    <textarea rows={4} placeholder="Detalhes da avaliação" name='description' value={description} onChange={(e) => { setDescription(e.target.value) }} required />


                    <div className="estrelas">
                        <>Avalie o Pokemon: </>
                        <input type="radio" id="cm_star-empty" name="fb" value="" checked readOnly />
                        <label htmlFor="cm_star-1"><i className="fa"></i></label>
                        <input type="radio" id="cm_star-1" name="fb" value="1" onChange={(e) => { setStars(Number(e.target.value)) }} />
                        <label htmlFor="cm_star-2"><i className="fa"></i></label>
                        <input type="radio" id="cm_star-2" name="fb" value="2" onChange={(e) => { setStars(Number(e.target.value)) }} />
                        <label htmlFor="cm_star-3"><i className="fa"></i></label>
                        <input type="radio" id="cm_star-3" name="fb" value="3" onChange={(e) => { setStars(Number(e.target.value)) }} />
                        <label htmlFor="cm_star-4"><i className="fa"></i></label>
                        <input type="radio" id="cm_star-4" name="fb" value="4" onChange={(e) => { setStars(Number(e.target.value)) }} />
                        <label htmlFor="cm_star-5"><i className="fa"></i></label>
                        <input type="radio" id="cm_star-5" name="fb" value="5" onChange={(e) => { setStars(Number(e.target.value)) }} />
                    </div>
    
                    <button className="button" type="submit">
                        Cadastrar
                    </button>
                </form>
            </div>
        </Container>

    );
}

export default Form;