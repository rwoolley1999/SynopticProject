import React from 'react';
import { connect } from 'react-redux';
import  { requestPlaylistCreation } from '../store/mutations';
import { Link } from 'react-router-dom';

export const Playlists = ({playlists, name, id, createNewPlaylist})=>(
    <div>
        <h3>
            {name}
        </h3>
        {playlists.map(playlist=>(
            <Link to={'/playlist/'+playlist.id} key={playlist.id}>
              <div>
                  {playlist.name}
              </div>
            </Link>
              ))}
        <button onClick={()=>createNewPlaylist(id)}>Add New Playlist</button>
    </div>
);

const mapStateToProps=(state, ownProps)=>{
    let categoryID = ownProps.id;
    return{
        name:ownProps.name,
        id:categoryID,
        playlists:state.playlists.filter(playlist=>playlist.category === categoryID)
    }
}

const mapDistpatchToProps = (dispatch, ownProps)=>{
    return{
        createNewPlaylist(id){
            console.log("Creating new task", id);
            dispatch(requestPlaylistCreation(id));
        }
    }
}
export const ConnectedPlaylists = connect(mapStateToProps, mapDistpatchToProps)(Playlists);
