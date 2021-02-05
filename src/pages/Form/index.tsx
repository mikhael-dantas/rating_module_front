import React, { useState, useEffect, FormEvent } from 'react';
import './styles.css'

// define o formato da deficiência
interface Defi {
        id: string,
        nome: string,
        acima_de_60: string,
        de_18_a_60: string,
        de_0_a_18: string
    }


const Form: React.FC = () => {

    // state das deficiências
    const [defis, setDefis] = useState<Defi[]>([])

    // função usada pra dar update no lugar certo do state, pegando do input
    function newState(id:string, campo: number, value: string) {
        return defis.map(deficiencia => {
            if (deficiencia.id === id) {
                switch (campo) {
                    case 1:
                        deficiencia.acima_de_60 = value
                        break;
                    case 2:
                        deficiencia.de_18_a_60 = value
                        break;
                    case 3:
                        deficiencia.de_0_a_18 = value
                        break;
                    default:
                        break;
                }
            }
            return deficiencia
        })
    }



    // nome da função diz tudo
    function handleSubmit(e: FormEvent) {
        e.preventDefault()
        console.log(defis)
    }


    // pega a api e seta o state das deficiência que vieram
    useEffect(() => {
        const api: any = [{ id: 'aklsdjkasj', nome: 'aush'}, { id: 'aklsdjkasja', nome: 'ausdh'}]

        const temp: Defi[] = []
        api.forEach((deficiencia: any) => {
            deficiencia.acima_de_60 = ''
            deficiencia.de_18_a_60 = ''
            deficiencia.de_18_a_60 = ''

            temp.push(deficiencia)
        })
        setDefis(temp)
    }, []);



    return (
        <form onSubmit={(e) => handleSubmit(e)}>
            {defis.map(deficiencia => {
                return (
                    <label key={deficiencia.id}> sou uma label
                        <input type="text" 
                            value={defis.find(statedefi => statedefi.id === deficiencia.id)?.acima_de_60}
                            onChange={(e) => setDefis(newState(deficiencia.id, 1, e.target.value))}
                        />
                        <input type="text" 
                            value={defis.find(statedefi => statedefi.id === deficiencia.id)?.de_18_a_60}
                            onChange={(e) => setDefis(newState(deficiencia.id, 2, e.target.value))}
                        />
                        <input type="text" 
                            value={defis.find(statedefi => statedefi.id === deficiencia.id)?.de_0_a_18}
                            onChange={(e) => setDefis(newState(deficiencia.id, 3, e.target.value))}
                        />
                    </label>)
            })}
            <input type="submit" value="Enviar" />
        </form>
    );
}

export default Form;