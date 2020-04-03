export const REQUEST_PLAYLIST_CREATION = 'REQUEST_PLAYLIST_CREATION';
export const CREATE_PLAYLIST = 'CREATE_PLAYLIST';
export const ASSIGN_PLAYLIST_CATEGORY = "ASSIGN_PLAYLIST_CATEGORY";
export const ASSIGN_PLAYLIST_NAME = "ASSIGN_PLAYLIST_NAME"
export const DELETE_PLAYLIST = "DELETE_PLAYLIST";
export const REQUEST_NEW_CATEGORY = "REQUEST_NEW_CATEGORY";
export const ADD_NEW_CATEGORY = "ADD_NEW_CATEGORY";
export const ASSIGN_CATEGORY_NAME = "ASSIGN_CATEGORY_NAME";
export const DELETE_CATEGORY = "DELETE_CATEGORY";
export const ADD_PLAYLIST_COMMENT = "ADD_PLAYLIST_COMMENT";
export const REQUEST_ADD_FILE = "REQUEST_ADD_FILE";
export const ADD_MEDIA_FILE = "ADD_MEDIA_FILE";
export const ASSIGN_MEDIA_FILE_NAME = "ASSIGN_MEDIA_FILE_NAME";

export const requestPlaylistCreation=()=>({
    type:REQUEST_PLAYLIST_CREATION
});

export const createPlaylist=(playlistID)=>({
    type:CREATE_PLAYLIST,
    playlistID
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

export const requestCategoryCreation=()=>({
    type:REQUEST_NEW_CATEGORY
});

export const addNewCategory=(categoryID)=>({
    type:ADD_NEW_CATEGORY,
    categoryID
});

export const assignCategoryName=(id, name)=>({
    type: ASSIGN_CATEGORY_NAME,
    categoryID: id,
    name
});

export const deleteCategory = (categoryID)=>({
    type: DELETE_CATEGORY,
    categoryID
});

export const requestFileAddition=(playlistID)=>({
    type:REQUEST_ADD_FILE,
    playlistID
});

export const addMediaFile=(mediaFileID, playlistID)=>({
    type:ADD_MEDIA_FILE,
    mediaFileID,
    playlistID
});

export const assignMediaFileName=(id, name)=>({
    type: ASSIGN_MEDIA_FILE_NAME,
    mediaFileID: id,
    name
});