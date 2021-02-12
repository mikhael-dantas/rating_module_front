import React from 'react'
import {BrowserRouter, Route} from 'react-router-dom'
import Form from './pages/Form';
import Home from './pages/Home';
import Header from './components/Header';
import PokeList from './pages/PokeList';
import RatingList from './pages/RatingList';
import Footer from './components/Footer';


function Routes () {
    return (
        <>
            <BrowserRouter>
                <Header/>
                <Route path='/' exact component={Home} />
                <Route path='/pokelist' exact component={PokeList} />
                <Route path='/ratings' exact component={RatingList} />
                <Route path='/form' exact component={Form} />
                <Route path='/form/:name' exact component={Form} />
                <Footer/>
            </BrowserRouter>
        </>
    )
}

export default Routes;