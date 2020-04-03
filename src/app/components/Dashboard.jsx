import React from 'react';
import { connect } from 'react-redux';
import { ConnectedPlaylists } from './Playlists';
import { Link } from 'react-router-dom';
import { ConnectedCategories } from './Categories';
// import { MediaFiles } from './MediaFiles';

export const Dashboard = ({playlists})=>(
    <div>
        <Link to={'/categories'}>
            <div>
                Edit Categories
            </div>
        </Link>
        <h2>Playlists</h2>
        <ConnectedPlaylists id={playlists.id}/>
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