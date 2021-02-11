import React, { useState, useEffect } from 'react';
import { pokeApi } from '../../services/api';
import {Container} from './styles'

const Form: React.FC<any> = ({match}) => {
    const [idOrigin, setIdOrigin] = useState<string>(match.params.id_origin ? match.params.id_origin : '')
    const [title, setTitle] = useState<string>('')
    const [description, setDescription] = useState<string>('')
    const [stars, setStars] = useState<number>(0)

    async function handleSubmit(e: any) {
        e.preventDefault()
        let error = 0
        await pokeApi.get(`/${idOrigin}`).catch(() => {
            alert('esse pokemon não existe')
            error = 1
        })
        if (!error) {
            console.log({
                id_origin: idOrigin,
                title: title,
                description: description,
                stars: stars
            })
        }
    }


    // pega a api e seta o state das deficiência que vieram
    useEffect(() => {
    }, []);



    return (
        <Container className='container'>
            <h1>Enviar Avaliação</h1>
            <form className='poke-form' onSubmit={(e) => handleSubmit(e)}>
                <label className='name'>
                    Pokemon:<br/>
                    <input type="text" name='idOrigin' value={idOrigin} onChange={(e) => {setIdOrigin(e.target.value)}}/>
                </label>
                <label className='title'>
                    Opinião sobre o pokemon:<br/>
                    <input type="text" name='title' value={title} onChange={(e) => {setTitle(e.target.value)}}/>
                </label>
                <label className='description'>
                    Detalhes da avaliação:<br/>
                    <textarea rows={4} name='description' value={description} onChange={(e) => {setDescription(e.target.value)}}/>
                </label>
                <label className='stars'>
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
                </label>
                <input className='submit-button' type="submit" value="Enviar" />
            </form>
        </Container>
    );
}

export default Form;