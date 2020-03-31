// import React, { Component } from "react";
// import { MDBBtn, MDBInput, MDBModal, MDBModalBody, MDBModalHeader, MDBModalFooter, MDBIcon, MDBBadge, MDBContainer, MDBRow, MDBCol} from "mdbreact";

// export class Playlists extends Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       modal: false,
//       playlists: [
//         {
//           id: 1,
//           name: "Example Playlist",
//           category: "Pop",
//           comment: "This is an example playlist"
//         }
//       ]
//     };
//   }
//   addPlaylist = () => {
//     var newArray = [...this.state.playlists];
//     newArray.push({
//       id: newArray.length ? newArray[newArray.length - 1].id + 1 : 1,
//       name: this.state.name,
//       category: this.state.category,
//       comment: this.state.comment
//     });
//     this.setState({ playlists: newArray });
//     this.setState({
//       name: "",
//       category: "",
//       comment: ""
//     });
//   };

//   handleInputChange = inputName => value => {
//     const nextValue = value;

//     this.setState({
//       [inputName]: nextValue
//     });
//   };

//   handleDelete = playlistId => {
//     const playlists = this.state.playlists.filter(e => e.id !== playlistId);
//     this.setState({ playlists });
//   };
//   toggleModal = () => {
//     this.setState({
//       modal: !this.state.modal
//     });
//   };

//   render() {
//     return (
//       <React.Fragment>
//         <MDBContainer>
//           <MDBRow>
//             <MDBCol md="9" className="mb-r">
//               <div id="schedule-items">
//                 {this.state.playlists.map(playlist => (
//                   <PlaylistManagement
//                     key={playlist.id}
//                     id={playlist.id}
//                     name={playlist.name}
//                     category={playlist.category}
//                     comment={playlist.comment}
//                     onDelete={this.handleDelete}
//                   />
//                 ))}
//               </div>
// 			   <MDBRow className="mb-4">
//                 <MDBCol xl="3" md="6" className="mx-auto text-center">
//                   <MDBBtn color="info" rounded onClick={this.toggleModal}>
//                     Add Event
//                   </MDBBtn>
//                 </MDBCol>
//               </MDBRow>
//               </MDBCol>
//               </MDBRow>
//         </MDBContainer>

//         <MDBModal isOpen={this.state.modal} toggle={this.toggleModal}>
//           <MDBModalHeader
//             className="text-center"
//             titleClass="w-100 font-weight-bold"
//             toggle={this.toggleModal}
//           >
//             Add new playlist
//           </MDBModalHeader>
//           <MDBModalBody>
//             <form className="mx-3 grey-text">
//               <MDBInput
//                 name="name"
//                 label="Playlist Name"
//                 hint="Bach Collection"
//                 group
//                 type="text"
//                 getValue={this.handleInputChange("name")}
//               />
//               <MDBInput
//                 name="category"
//                 label="Category (optional)"
//                 hint="Classical"
//                 group
//                 type="text"
//                 getValue={this.handleInputChange("category")}
//               />
//               <MDBInput
//                 name="comment"
//                 label="Comment (optional)"
//                 group
//                 type="textarea"
//                 getValue={this.handleInputChange("comment")}
//               />
//             </form>
//           </MDBModalBody>
//           <MDBModalFooter className="justify-content-center">
//             <MDBBtn
//               color="info"
//               onClick={() => {
//                 this.toggleModal();
//                 this.addPlaylist();
//               }}
//             >
//               Add
//             </MDBBtn>
//           </MDBModalFooter>
//         </MDBModal>
//       </React.Fragment>
//     );
//   }
// }

// class PlaylistManagement extends Component {
//   render() {
//     return (
//       <React.Fragment>
//         <div className="media mt-1">
//           <h3 className="h3-responsive font-weight-bold mr-3">
//             {this.props.name}
//           </h3>
//           <div className="media-body mb-3 mb-lg-3">
//             <MDBBadge
//               color="danger"
//               className="ml-2 float-right"
//               onClick={() => this.props.onDelete(this.props.id)}
//             >
//               -
//             </MDBBadge>
//             <h6 className="mt-0 font-weight-bold">{this.props.category} </h6>
//             <hr className="hr-bold my-2" />
//           </div>
//         </div>
//         {this.props.comment && (
//           <p className="p-2 mb-4  blue-grey lighten-5 blue-grey lighten-5">
//             {this.props.comment}
//           </p>
//         )}
//       </React.Fragment>
//     );
//   }
// }

import React from 'react';
import { connect } from 'react-redux';
import  { requestPlaylistCreation } from '../store/mutations';
import { Link } from 'react-router-dom';

export const Playlists = ({playlists, name, id, createNewPlaylist})=>(
    <div>
        <h3>
            {name}
        </h3>
        {playlists.map(playlist=>(
            <Link to={'/playlist/'+playlist.id} key={playlist.id}>
              <div>{playlist.name}</div>
            </Link>
              ))}
        <button onClick={()=>createNewPlaylist(id)}>Add New Playlist</button>
    </div>
);

const mapStateToProps=(state, ownProps)=>{
    let categoryID = ownProps.id;
    return{
        name:ownProps.name,
        id:categoryID,
        playlists:state.playlists.filter(playlist=>playlist.category === categoryID)
    }
}

const mapDistpatchToProps = (dispatch, ownProps)=>{
    return{
        createNewPlaylist(id){
            console.log("Creating new task", id);
            dispatch(requestPlaylistCreation(id));
        }
    }
}
export const ConnectedPlaylists = connect(mapStateToProps, mapDistpatchToProps)(Playlists);
