import React from 'react';
import { Route, Switch } from 'react-router-dom';
import { Home, About, PageNotFound, Protected, Login } from './routes';

const MainRoutes = () => {
    return (
        <Switch>
            <Route exact={true} path="/" component={Home} />
            <Route path="/about" component={About} />
            <Route path="/protected" component={Protected} />
            <Route exact={true} path="/login" component={Login} />
            <Route path="*" component={PageNotFound} />
        </Switch>
    );
};

export default MainRoutes;
