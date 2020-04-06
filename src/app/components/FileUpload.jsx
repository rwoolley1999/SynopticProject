import React, { Fragment, useState } from 'react';
import { connect } from 'react-redux';
import axios from 'axios';
import * as mutations from '../store/mutations';

export const FileUpload = () => {
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
      const res = await axios.post('/', formData, {
        headers: {
          'Content-Type': 'multipart/form-data'
        }
      });

      const { fileName, filePath } = res.data;

      setUploadedFile({ fileName, filePath });

      setMessage('File Uploaded');
    } catch (err) {
      if (err.response.status === 500) {
        console.log("Problem with the server");
      } else {
        console.log(err);
      }
    }
  };

  return (
    <Fragment>
      <form onSubmit={onSubmit}>
        <div className='custom-file mb-4'>
          <input
            type='file'
            className='custom-file-input'
            id='customFile'
            onChange={onChange}
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
        <div className='row mt-5'>
          <div className='col-md-6 m-auto'>
            <h3 className='text-center'>{uploadedFile.fileName}</h3>
            <h4>{uploadedFile.filePath}</h4>
          </div>
        </div>
      ) : null}
    </Fragment>
  );
};

const mapStateToProps=(state, ownProps)=>{
    let id = ownProps.match.params.id;
    let mediaFiles = state.mediaFiles;

    return{
        id,
        mediaFiles
    }
};

const mapDispatchToProps = (dispatch, ownProps)=>{
    const id = ownProps.match.params.id;
    return{
        assignMediaFileName(e){
            dispatch(mutations.assignMediaFileName(id, e.target.value));
        }
    }
}

export default FileUpload;
