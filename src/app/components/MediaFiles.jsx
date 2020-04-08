import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import  { requestFileAddition } from '../store/mutations';

export const Media = ({ name, id, mediaFiles, addMediaFile })=>{
    return(
    <div>
        {mediaFiles.map(mediaFile=>(
            <Link to={'/mediafiles/'+mediaFile.id} key={mediaFile.id}>
            <div>
                {
                    mediaFile.name
                }
            </div>
          </Link>
        ))}
         <button onClick={()=>addMediaFile(id)} >Add Media File</button> 
    </div>
    )};

const mapStateToProps=(state, ownProps)=>{
    let id = ownProps.id;
    return{
        name:ownProps.name,
        id:id,
        mediaFiles : state.mediaFiles,
        mediaFile : state.mediaFiles.find(mediaFile=>mediaFile.id === id)
    }
}

const mapDistpatchToProps = (dispatch, ownProps)=>{
    return{
        addMediaFile(id){
            console.log("Adding new media file", id);
            dispatch(requestFileAddition(id));
        }
    }
}

export const ConnectedMedia = connect(mapStateToProps, mapDistpatchToProps)(Media);
