import React from 'react';
import { connect } from 'react-redux';
import  { requestFileAddition, addMediaFile } from '../store/mutations';
import { Link } from 'react-router-dom';

export const Media = ({mediaFiles, name, id, addMediaFile})=>(
    <div>
        {mediaFiles.map(mediaFile=>(
              <div>
                  {mediaFile.name}
              </div>
              ))}
        <button onClick={()=>addMediaFile(id)}>Add MediaFile</button>
    </div>
);

// const mapStateToProps=(state, ownProps)=>{
//   let id = ownProps.id;
//   return{
//       name:ownProps.name,
//       id:id,
//       mediaFiles:state.mediaFiles,
//       playlists:state.playlists
//   }
// }

const mapStateToProps = (state, {name, id})=>{
    return {
        name:name,
        mediaFiles: state.mediaFiles.filter(mediaFile=>mediaFile.playlist === id),
        id
    };
};

const mapDistpatchToProps = (dispatch, ownProps)=>{
    return{
        addMediaFile(id){
            console.log("Creating new mediaFile", id);
            dispatch(requestFileAddition(id));
        }
    }
}
export const ConnectedMedia = connect(mapStateToProps, mapDistpatchToProps)(Media);
