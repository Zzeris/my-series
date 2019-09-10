import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Home from './pages/Home';
import Genres from './pages/Genre';
import NewGenre from './pages/NewGenre';
import EditGenre from './pages/EditGenre';
import NewSerie from './pages/NewSerie';

export default function Routes() {
    return (
        <Switch>
            <Route path="/" exact component={Home} />
            <Route path="/genres" exact component={Genres} />
            <Route path="/genres/new" exact component={NewGenre} />
            <Route path="/genres/:id" exact component={EditGenre} />
            <Route path="/series/new" exact component={NewSerie} />
        </Switch>
    );
}