//CONVERT THIS INTO A MODAL IF HAVE TIME
import React, { Fragment, useState } from 'react';
import Select from 'react-select';
import { connect } from 'react-redux';
import axios from 'axios';
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
    addMediaFileComment,
    assignMediaFilePath
})=>{

    const [file, setFile] = useState('');
    const [filename, setFilename] = useState('Choose File');
    const [uploadedFile, setUploadedFile] = useState({});
    
    const onChange = e => {
      setFile(e.target.files[0]);
      setFilename(e.target.files[0].name);
    };
  
    const onSubmit = async e => {
      e.preventDefault();
      const formData = new FormData();
      formData.append('file', file);
  
      try {
        const res = await axios.post('http://localhost:7777/', formData, {
          headers: {
            'Content-Type': 'multipart/form-data'
          }
        });
  
        const { fileName, filePath } = res.data;
  
        setUploadedFile({ fileName, filePath });
  
  
      } catch (err) {
        if (err.response.status === 500) {
          alert("Problem with the server");
        } else {
          alert(err);
        }
      }
    };

    const twoCalls = e => {
        onChange(e);
        assignMediaFileName(e);
      }

      let newname = mediaFile.name.replace(/^.*\\/, "");

    return(
    <div>
    <div>
      <form onSubmit={onSubmit}>
        <div className='custom-file mb-4'>
          <input
            type='file'
            className='custom-file-input'
            id='customFile'
            accept="video/*, audio/*"
            onChange={twoCalls}
            // value={mediaFile.name}
          />
          <label className='custom-file-label' htmlFor='customFile'>
            {filename}
          </label>
        </div>

        <input
          type='submit'
          value='Upload'
          className='btn btn-primary btn-block mt-4'
        />
      </form>
      {uploadedFile ? (
          <div>
            <h6>File Name: {newname}</h6>
            <h6>File Path: {uploadedFile.filePath}</h6>
        </div>
      ) : null}
      </div>
        <div>
            {/* <input onChange={assignMediaFileName} value={mediaFile.name}/> */}
        </div>
        {/* <ConnectedFileUpload/> */}
        <div>
            Select media file category: <br></br>
            <select onChange={assignMediaFileCategory} value={mediaFile.category}>
                {categories.map(category=>(
                    <option key={category.id} value={category.id}>{category.name}</option>
                ))}
            </select>
        </div>
        <div>
            Select media file playlist: <br></br>
            <select onChange={assignMediaFilePlaylist} value={mediaFile.playlist}>
                {playlists.map(playlist=>(
                    <option key={playlist.id} value={playlist.id}>{playlist.name}</option>
                ))}
{/* FIX THIS SO MULTIPLE PLAYLISTS CAN BE CHOSEN */}
            </select>
        </div>
        <div>
            Add a comment: <br></br>
            <input onChange={addMediaFileComment} value={mediaFile.comment} placeholder="Add Comment Here"/>
        </div>
        {/* <div>
        <Link to="/">
            <button onClick={()=>deleteCategory(id)} value={category.id}>Delete Category</button>
        </Link>
        </div> */}
        <div>
            <br></br>
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

    return{
        id,
        mediaFile,
        categories,
        playlists
    }
};

const mapDispatchToProps = (dispatch, ownProps)=>{
    const id = ownProps.match.params.id;
    return{
        assignMediaFileName(e){
            dispatch(mutations.assignMediaFileName(id, e.target.value));
        },
        assignMediaFilePath(filePath){
            dispatch(mutations.assignMediaFilePath(id, filePath));
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