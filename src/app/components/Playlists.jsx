import React from 'react';
import { connect } from 'react-redux';
import  { requestPlaylistCreation, createPlaylist } from '../store/mutations';
import { Link } from 'react-router-dom';

export const Playlists = ({playlists, name, id, createPlaylist})=>(
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
        <button onClick={()=>createPlaylist(id)} >Add New Playlist</button>
    </div>
);

const mapStateToProps=(state, ownProps)=>{
    let id = ownProps.id;
    return{
        name:ownProps.name,
        id:id,
        playlists:state.playlists
    }
}

const mapDistpatchToProps = (dispatch, ownProps)=>{
    return{
        createPlaylist(id){
            console.log("Creating new playlist", id);
            dispatch(requestPlaylistCreation(id));
        }
    }
}
export const ConnectedPlaylists = connect(mapStateToProps, mapDistpatchToProps)(Playlists);
