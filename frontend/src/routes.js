import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom'    

import SingIn from './pages/SingIn';
import SingUp from './pages/singUp';

export default function Routes(){
    return (
        <BrowserRouter>
            <Switch>
                <Route path="/" exact component= {SingUp} />
                <Route path="/Login" exact component= {SingIn} />
            </Switch>
        </BrowserRouter>
    );
}