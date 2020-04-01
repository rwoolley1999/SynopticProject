export const REQUEST_PLAYLIST_CREATION = 'REQUEST_PLAYLIST_CREATION';
export const CREATE_PLAYLIST = 'CREATE_PLAYLIST';
export const ASSIGN_PLAYLIST_CATEGORY = "ASSIGN_PLAYLIST_CATEGORY";
export const ASSIGN_PLAYLIST_NAME = "ASSIGN_PLAYLIST_NAME"
export const DELETE_PLAYLIST = "DELETE_PLAYLIST";
// export const ADD_NEW_CATEGORY = "ADD_NEW_CATEGORY";
export const ADD_PLAYLIST_COMMENT = "ADD_PLAYLIST_COMMENT";

export const requestPlaylistCreation=(categoryID)=>({
    type:REQUEST_PLAYLIST_CREATION,
    categoryID
});

export const createPlaylist=(playlistID, categoryID)=>({
    type:CREATE_PLAYLIST,
    playlistID,
    categoryID
});

export const assignPlaylistCategory=(id, categoryID)=>({
    type: ASSIGN_PLAYLIST_CATEGORY,
    playlistID: id,
    categoryID
});

export const assignPlaylistName=(id, name)=>({
    type: ASSIGN_PLAYLIST_NAME,
    playlistID: id,
    name
});

// export const addNewCategory=(id, name)=>({
//     type: ADD_NEW_CATEGORY,
//     categoryID: id,
//     name
// });

export const addPlaylistComment = (commentID, playlistID,  content)=>({
    type:ADD_PLAYLIST_COMMENT,
    id:commentID,
    playlist: playlistID,
    content
});

export const deletePlaylist = (playlistID)=>({
    type: DELETE_PLAYLIST,
    playlistID
});