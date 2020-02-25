import React, {Component} from 'react';
import { Switch, Route, Redirect, BrowserRouter as Router } from 'react-router-dom';
import Acomponent from './Acomponent';
import Bcomponent from './Bcomponent';
import App1 from './App';
import AuthWrapper from './authWrapper';

const Main = () => {
    const pages = [{
        exact: true,
        path: '/acomponent',
        Component: Acomponent
    },{
        exact: true,
        path: '/bcomponent',
        Component: Bcomponent
    }, {
        exact: true,
        path: '/app',
        Component: App1
    }];
    return (
        <Router>
            <Switch>
               {pages.map((page) => {
                   return (
                       <AuthWrapper {...page}/>
                   )
               })} 
               <Redirect to='/app' />
            </Switch>
        </Router>
    ) 
}

export default Main;