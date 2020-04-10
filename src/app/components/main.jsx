import React from 'react';
import { Router, Route } from 'react-router-dom';
import { Provider } from 'react-redux';
import { store } from '../store';
import { ConnectedDashboard } from './dashboard';
import { history } from '../store/history';
import { ConnectedNavigation } from './navigation';
import { ConnectedPlaylistItems } from './playlist_items';
import { ConnectedCategories } from './categories';
import { ConnectedEditCategories } from './edit_categories';
import { ConnectedMedia } from './media_files';
import { ConnectedEditMedia } from './edit_media';

export const Main = () => (
    <Router history={history}>
        <Provider store={store}>
            <div>
                <ConnectedNavigation />
                <Route exact path="/" component={ConnectedDashboard} />
                <Route exact path="/playlist/:id" component={({ match }) => (<ConnectedPlaylistItems match={match} />)} />
                <Route exact path="/categories" component={ConnectedCategories} />
                <Route exact path="/categories/:id" component={({ match }) => (<ConnectedEditCategories match={match} />)} />
                <Route exact path="/mediafiles" component={ConnectedMedia} />
                <Route exact path="/mediafiles/:id" component={({ match }) => (<ConnectedEditMedia match={match} />)} />
            </div>
        </Provider>
    </Router>
)
