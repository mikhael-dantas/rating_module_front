import React, { useState, useEffect } from 'react';
import { api, pokeApi } from '../../services/api';
import { Container } from './styles';




const Form: React.FC<any> = ({ match }) => {
    const [list, setList] = useState<any[]>([]);
    const [offset, setOffset] = useState(0)
    const [id_origin, setId_origin] = useState<number>(0)
    const [title, setTitle] = useState<string>('')
    const [description, setDescription] = useState<string>('')
    const [stars, setStars] = useState<number>(0)


    async function handleSubmit(e: any) {
        e.preventDefault()

        const dataToPost = {
            id_origin: id_origin,
            title: title,
            description: description,
            stars: stars
        }

        let apiPost = await api.post('/rating', dataToPost).catch(() => {
            console.log('error trying to post in main api. Logging form instead')
            console.log(dataToPost)
            return { data: {}, status: Number }
        })

        if (apiPost)
            alert(apiPost.data.message)


    }


    useEffect(() => {
        async function setDataFromApi(offsetArg: number) {
            let organizedPokeList: any[] = []

            let apiPokeList = await pokeApi.get('/', { params: { offset: offsetArg, limit: 100 } }).catch(() => {
                alert('esse pokemon não existe')
                return { data: {} }
            })

            organizedPokeList = await Promise.all(apiPokeList.data.results.map(async (poke: any) => {
                const response = await pokeApi.get('/' + poke.name)
                return response.data
            }))

            setList(organizedPokeList)
        }
        setDataFromApi(offset)
    }, [offset]);

    return (
        <Container className='container'>

            <div className="content">
                <section>
                    <h1>Enviar Avaliação</h1>
                </section>

                <form className='poke-form' onSubmit={(e) => handleSubmit(e)}>

                    <select
                        placeholder="Selecione o Pokemo"
                        name="id_origin"
                        onChange={(e) => { setId_origin(Number(e.target.value)) }}
                    >
                        {list.map(poke => (
                            <option key={poke.id} value={poke.id}>{poke.name}</option>
                        ))}
                    </select>

                    <input type="text" placeholder="Título da Avaliação" name='title' value={title} onChange={(e) => { setTitle(e.target.value) }} required />
                    <textarea rows={4} placeholder="Detalhes da avaliação" name='description' value={description} onChange={(e) => { setDescription(e.target.value) }} required />


                    <div className="estrelas">
                        <>Avalie o Pokemon: </>
                        <input type="radio" id="cm_star-empty" name="fb" value="" checked />
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
                    {/* <label className='stars'>
                        <div>
                            Estrelas:<br/>
                            <div className="radio">
                                <label>
                                    <input
                                    type="radio"
                                    value={1}
                                    checked={stars === 1}
                                    onChange={(e) => {setStars(Number(e.target.value))}}
                                    />
                                    1
                                </label>
                            </div>
                            <div className="radio">
                                <label>
                                    <input
                                    type="radio"
                                    value={2}
                                    checked={stars === 2}
                                    onChange={(e) => {setStars(Number(e.target.value))}}
                                    />
                                    2
                                </label>
                            </div>
                            <div className="radio">
                                <label>
                                    <input
                                    type="radio"
                                    value={3}
                                    checked={stars === 3}
                                    onChange={(e) => {setStars(Number(e.target.value))}}
                                    />
                                    3
                                </label>
                            </div>
                            <div className="radio">
                                <label>
                                    <input
                                    type="radio"
                                    value={4}
                                    checked={stars === 4}
                                    onChange={(e) => {setStars(Number(e.target.value))}}
                                    />
                                    4
                                </label>
                            </div>
                            <div className="radio">
                                <label>
                                    <input
                                    type="radio"
                                    value={5}
                                    checked={stars === 5}
                                    onChange={(e) => {setStars(Number(e.target.value))}}
                                    />
                                    5
                                </label>
                            </div> 
                        </div>
                    </label>*/}


                    <button className="button" type="submit">
                        Cadastrar
                    </button>
                </form>
            </div>
        </Container>

    );
}

export default Form;