import React,{Component,Fragment} from 'react'
import { Route, Switch, Redirect} from 'react-router-dom'
import Home from '../containers/home'
import HomeRoutes from './home'
import About from '../containers/about'
import Footer from "../components/footer";
export default ()=>(
    <div>
        <header />
        <Switch>
            <Route exact path='/' component={Home}></Route>
        </Switch>
        <Footer />
    </div>
)