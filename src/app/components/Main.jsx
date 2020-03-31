// import React, {Component} from 'react';
// import { BrowserRouter as Router, Route } from 'react-router-dom';
// import { Dashboard } from './Dashboard';
// import { Playlists } from './Playlists';
// import { Navigation } from './Navigation';

// export class Main extends Component{
//     render(){
//         return(
//         <Router>
//         <div>
//             <Navigation/>
//             <Route exact path='/' component={Dashboard} />
//             <Route exact path='/playlist/:id' component={Playlists}/>
//             {/* fix this so it links to list of media files added to playlist and so that it acc gets the playlist id */}
//         </div>
//         </Router>
//         )
//     }
// }

import React from 'react';
import {Router, Route} from 'react-router-dom';
import { Provider } from 'react-redux';
import { store } from '../store';
import {ConnectedDashboard } from './Dashboard';
import { history } from '../store/history';
import { ConnectedNavigation } from './Navigation';
import { ConnectedPlaylistItems } from './PlaylistItems';

export const Main  = () =>(
    <Router history={history}>
        <Provider store={store}>
            <div>
                <ConnectedNavigation/>
                <Route exact path="/" component={ConnectedDashboard} />
                <Route exact path="/playlist/:id" component={({match})=>(<ConnectedPlaylistItems match={match}/>)}/>
            </div>
        </Provider>
    </Router>
)