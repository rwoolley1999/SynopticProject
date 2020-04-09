import React from 'react';
import { connect } from 'react-redux';
import { ConnectedPlaylists } from './playlists';
import { Link } from 'react-router-dom';
import '../styles/components.css';

export const Dashboard = ({playlists})=>(
    <div>
    <div class="column">
        <Link to={'/categories'}>
        <div>
                Categories
            </div>
        </Link>
        <Link to={'/mediafiles'}>
            <div>
                Media Files
            </div>
        </Link>
    </div>
        <h2>Playlists</h2>
        <ConnectedPlaylists/>
    </div>
);

function mapStateToProps(state){
    return{
        playlists:state.playlists
    }
}

export const ConnectedDashboard = connect(mapStateToProps)(Dashboard);

//got up to start of routing amd navigation vid. Start adding in this. See fav for save/load state

//FIX SO PLAYLISTS ARE GROUPED BY CATEGORY