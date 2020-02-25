import React from 'react';
import { Route } from 'react-router-dom';
import Login from './Login';

const AuthWrapper = ({exact, Component, path}) => {
    const isLogin = localStorage.getItem('auth');
    return (
        <Route 
         exact={exact}
         path={path}
         render={() => {
             if (isLogin) {
                 return <Component />
             }
             return <Login />
         }}
        />
    )
}

export default AuthWrapper;