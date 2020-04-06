import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import * as mutations from '../store/mutations';
import { ConnectedMedia } from './MediaFiles';
// import { ConnectedAddMedia } from './AddMedia';

const PlaylistItems = ({
    id,
    playlist,
    categories,
    mediaFiles,

    assignPlaylistCategory,
    assignPlaylistName,
    deletePlaylist
})=>{
    return(
    <div>
        <div>
            <input onChange={assignPlaylistName} value={playlist.name}/>
        </div>
        {/* <div>
            <select onChange={assignPlaylistCategory} value={playlist.category}>
                {categories.map(category=>(
                    <option key={category.id} value={category.id}>{category.name}</option>
                ))}
            </select>
        </div> */}
        <div>
        <Link to="/">
            <button onClick={()=>deletePlaylist(id)} value={playlist.id}>Delete Playlist</button>
        </Link>
        </div>
        <div>
        <div>
        {mediaFiles.map(mediaFile=>(
            <Link to={'/mediafiles/'+mediaFile.id} key={mediaFile.id}>
            <div>
                {mediaFile.name}
            </div>
          </Link>
        ))}
        </div>
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
    let mediaFiles = state.mediaFiles.filter(mediaFile=>mediaFile.playlist === id)

    return{
        id,
        playlist,
        categories,
        mediaFiles
    }
};

const mapDispatchToProps = (dispatch, ownProps)=>{
    const id = ownProps.match.params.id;
    return{
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