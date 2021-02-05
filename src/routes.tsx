import React from 'react'
import {BrowserRouter, Route} from 'react-router-dom'
import Form from './pages/Form';
import Home from './pages/Home';
import Header from './components/Header';


function Routes () {
    return (
        <>
            <Header/>
            <BrowserRouter>
                <Route path='/' exact component={Home} />
                <Route path='/form' exact component={Form} />
            </BrowserRouter>
        </>
    )
}

export default Routes;