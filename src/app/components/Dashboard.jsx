import React from 'react';
import { connect } from 'react-redux';
import { ConnectedPlaylists } from './Playlists';
// import { ConnectedCategories } from './Categories';

export const Dashboard = ({categories})=>(
    <div>
        <h2>Playlists</h2>
        {categories.map(category=>(
        <ConnectedPlaylists id={category.id} name={category.name}/>
        ))}
        <div>
            {/* <ConnectedCategories/> */}
        </div>
    </div>
);

function mapStateToProps(state){
    return{
        categories:state.categories
    }
}

export const ConnectedDashboard = connect(mapStateToProps)(Dashboard);

//got up to start of routing amd navigation vid. Start adding in this. See fav for save/load state

//FIX SO PLAYLISTS ARE GROUPED BY CATEGORY