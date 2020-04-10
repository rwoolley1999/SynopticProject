import React, { Fragment, useState } from 'react';
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
  assignMediaFilePath,
  addMediaFileImage,
  deleteMediaFile
}) => {
  // setting state for file upload 
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
      // posting data to backend 
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

  // regex to remove "C:/fakepath" from media file name
  mediaFile.name = mediaFile.name.replace(/^.*\\/, "");

  // if statement to determine media file path
  if (mediaFile.filePath === "") {

    mediaFile.filePath = uploadedFile.filePath;

  } else if (mediaFile.filePath === undefined) {

    mediaFile.filePath = uploadedFile.filePath;

  } else {

    mediaFile.filePath;
  }

  return (
    <div>
      <div>
        <form onSubmit={onSubmit}>
          <div class='custom-file'>
            <input
              type='file'
              class='custom-file-input'
              id='customFile'
              accept="video/*, audio/*"
              onChange={twoCalls}
            />
            <label className='custom-file-label' htmlFor='customFile'>
              {filename}
            </label>
          </div>
          <br></br>
          <input
            type='submit'
            value={mediaFile.filePath}
            class='button'
            onClick={assignMediaFilePath}
          />
        </form>
        {uploadedFile ? (
          <div>
            <h6>File Name: {mediaFile.name}</h6>
            <h6>File Path: {mediaFile.filePath}</h6>
          </div>
        ) : null}
      </div>
      <div>
        Select media file category: <br></br>
        <select onChange={assignMediaFileCategory} value={mediaFile.category}>
          {categories.map(category => (
            <option key={category.id} value={category.id}>{category.name}</option>
          ))}
        </select>
      </div>
      <div>
        Select media file playlist: <br></br>
        <select onChange={assignMediaFilePlaylist} value={mediaFile.playlist}>
          {playlists.map(playlist => (
            <option key={playlist.id} value={playlist.id}>{playlist.name}</option>
          ))}
        </select>
      </div>
      <div>
        Add a comment: <br></br>
        <input onChange={addMediaFileComment} value={mediaFile.comment} placeholder="Add Comment" />
      </div>
      <div>
        Insert image URL of image to be associated with the media file:
        <br></br>
        <input onChange={addMediaFileImage} value={mediaFile.imageURL} />
        <img src={mediaFile.imageURL} alt="MediaFile Image Thumbnail" class="img" />
      </div>
      <div>
        <Link to="/">
          <button class="button">Done</button>
        </Link>
      </div>
      <br></br>
      <div>
        <Link to="/">
          <button onClick={() => deleteMediaFile(id)} value={mediaFile.id} class="deleteButton">Delete Media File</button>
        </Link>
      </div>
    </div>
  )
};



const mapStateToProps = (state, ownProps) => {
  let id = ownProps.match.params.id;
  let mediaFile = state.mediaFiles.find(mediaFile => mediaFile.id === id);
  let categories = state.categories;
  let playlists = state.playlists;

  return {
    id,
    mediaFile,
    categories,
    playlists
  }
};

const mapDispatchToProps = (dispatch, ownProps) => {
  const id = ownProps.match.params.id;
  return {
    assignMediaFileName(e) {
      dispatch(mutations.assignMediaFileName(id, e.target.value));
    },
    assignMediaFilePath(e) {
      dispatch(mutations.assignMediaFilePath(id, e.target.value));
    },
    addMediaFileImage(e) {
      dispatch(mutations.addMediaFileImage(id, e.target.value));
    },
    assignMediaFileCategory(e) {
      dispatch(mutations.assignMediaFileCategory(id, e.target.value));
    },
    assignMediaFilePlaylist(e) {
      dispatch(mutations.assignMediaFilePlaylist(id, e.target.value));
    },
    addMediaFileComment(e) {
      dispatch(mutations.addMediaFileComment(id, e.target.value));
    },
    deleteMediaFile(id) {
      console.log("deleting media file", id);
      dispatch(mutations.deleteMediaFile(id));
    }
  }
}

export const ConnectedEditMedia = connect(mapStateToProps, mapDispatchToProps)(EditMedia);