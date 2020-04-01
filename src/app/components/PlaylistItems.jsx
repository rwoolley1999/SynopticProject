import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import * as mutations from '../store/mutations';

const PlaylistItems = ({
    id,
    playlist,
    categories,

    assignPlaylistCategory,
    assignPlaylistName,
    deletePlaylist
})=>{
    return(
    <div>
        <div>
            <input onChange={assignPlaylistName} value={playlist.name}/>
        </div>
        <div>
            <select onChange={assignPlaylistCategory} value={playlist.category}>
                {categories.map(category=>(
                    <option key={category.id} value={category.id}>{category.name}</option>
                ))}
            </select>
        </div>
        <div>
        <Link to="/">
            <button onClick={()=>deletePlaylist(id)} value={playlist.id}>Delete Playlist</button>
        </Link>
        </div>
        <div>
            <Link to="/">
                <button>Done</button>
            </Link>
        </div>
    </div>
    )};


const mapStateToProps=(state, ownProps)=>{
    let id = ownProps.match.params.id;
    let playlist = state.playlists.find(playlist=>playlist.id === id);
    let categories = state.categories;

    return{
        id,
        playlist,
        categories
    }
};

const mapDispatchToProps = (dispatch, ownProps)=>{
    const id = ownProps.match.params.id;
    return{
        assignPlaylistCategory(e){
            dispatch(mutations.assignPlaylistCategory(id, e.target.value));
        },
        assignPlaylistName(e){
            dispatch(mutations.assignPlaylistName(id, e.target.value));
        },
        deletePlaylist(id){
            console.log("deleting playlist", id);
            dispatch(mutations.deletePlaylist(id));
        }
    }
}

export const ConnectedPlaylistItems = connect(mapStateToProps, mapDispatchToProps)(PlaylistItems);