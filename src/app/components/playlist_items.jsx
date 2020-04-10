import React from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import * as mutations from "../store/mutations";

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
            <h6>Playlist Name:</h6>
            <input onChange={assignPlaylistName} value={playlist.name}/>
        </div>
        <div>
        {mediaFiles.map(mediaFile=>(
            <Link to={"/mediafiles/"+mediaFile.id} key={mediaFile.id}>
            <div class="link">
                {mediaFile.name}
            </div>
          </Link>
        ))}
        </div>
        <div>
            <Link to="/">
                <button class="button">Done</button>
            </Link>
        </div>
        <div>
        <Link to="/">
            <button onClick={()=>deletePlaylist(id)} value={playlist.id} class="deleteButton">Delete Playlist</button>
        </Link>
        </div>
        <div>
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