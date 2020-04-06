//CONVERT THIS INTO A MODAL IF HAVE TIME
import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import * as mutations from '../store/mutations';

const EditMedia = ({
    id,
    mediaFile,
    categories,
    playlists,

    assignMediaFileName,
    assignMediaFileCategory,
    assignMediaFilePlaylist,
    addMediaFileComment
})=>{
    return(
    <div>
        <div>
            <input onChange={assignMediaFileName} value={mediaFile.name}/>
        </div>
        <div>
            <select onChange={assignMediaFileCategory} value={mediaFile.category}>
                {categories.map(category=>(
                    <option key={category.id} value={category.id}>{category.name}</option>
                ))}
            </select>
        </div>
        <div>
            <select onChange={assignMediaFilePlaylist} value={mediaFile.playlist}>
                {playlists.map(playlist=>(
                    <option key={playlist.id} value={playlist.id}>{playlist.name}</option>
                ))}
            </select>
        </div>
        {/* <div>
            <input onChange={addMediaFileComment} value={mediaFile.comment}/>
        </div> */}
        {/* <div>
        <Link to="/">
            <button onClick={()=>deleteCategory(id)} value={category.id}>Delete Category</button>
        </Link>
        </div> */}
        <div>
            <Link to="/">
                <button>Done</button>
            </Link>
        </div>
    </div>
    )};
    


const mapStateToProps=(state, ownProps)=>{
    let id = ownProps.match.params.id;
    let mediaFile = state.mediaFiles.find(mediaFile=>mediaFile.id === id);
    let categories = state.categories;
    let playlists = state.playlists;
    let comments = state.comments;

    return{
        id,
        mediaFile,
        categories,
        playlists,
        comments
    }
};

const mapDispatchToProps = (dispatch, ownProps)=>{
    const id = ownProps.match.params.id;
    return{
        assignMediaFileName(e){
            dispatch(mutations.assignMediaFileName(id, e.target.value));
        },
        assignMediaFileCategory(e){
            dispatch(mutations.assignMediaFileCategory(id, e.target.value));
        },
        assignMediaFilePlaylist(e){
            dispatch(mutations.assignMediaFilePlaylist(id, e.target.value));
        },
        addMediaFileComment(e){
            dispatch(mutations.addMediaFileComment(id, e.target.value));
        }
    }
}

export const ConnectedEditMedia = connect(mapStateToProps, mapDispatchToProps)(EditMedia);