import React, { useState, useEffect } from 'react';
import api from '../../services/api';

import RatingItem, { Rating } from '../../components/RatingItem';
import './styles.css'

const Home: React.FC = () => {

    const [ratinges, setRatinges] = useState([]);

    useEffect(() => {
        api.get('rating', {}).then(response => {

            setRatinges(response.data);
        });
    }, []);



    return (
        <div id="page-rating-list" className="container">
            <h1> Lista dos Pokemons já Votados</h1>
            <main>
                {ratinges.map((rating: Rating) => {
                    return <RatingItem key={rating.id} rating={rating} />;
                })}
            </main>
        </div>
    );
}

export default Home;