import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Genres from './pages/Genre';
import NewGenre from './pages/NewGenre';
import EditGenre from './pages/EditGenre';

const Home = () => {
    return <h1>Home</h1>
}

export default function Routes() {
    return (
        <Switch>
            <Route path="/" exact component={Home} />
            <Route path="/genres" exact component={Genres} />
            <Route path="/genres/new" exact component={NewGenre} />
            <Route path="/genres/:id" exact component={EditGenre} />
        </Switch>
    );
}