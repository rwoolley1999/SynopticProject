export const REQUEST_PLAYLIST_CREATION = 'REQUEST_PLAYLIST_CREATION';
export const CREATE_PLAYLIST = 'CREATE_PLAYLIST';
export const ASSIGN_PLAYLIST_NAME = "ASSIGN_PLAYLIST_NAME"
export const DELETE_PLAYLIST = "DELETE_PLAYLIST";
export const REQUEST_NEW_CATEGORY = "REQUEST_NEW_CATEGORY";
export const ADD_NEW_CATEGORY = "ADD_NEW_CATEGORY";
export const ASSIGN_CATEGORY_NAME = "ASSIGN_CATEGORY_NAME";
export const DELETE_CATEGORY = "DELETE_CATEGORY";
export const REQUEST_ADD_FILE = "REQUEST_ADD_FILE";
export const ADD_MEDIA_FILE = "ADD_MEDIA_FILE";
export const ASSIGN_MEDIA_FILE_NAME = "ASSIGN_MEDIA_FILE_NAME";
export const ASSIGN_MEDIA_FILE_CATEGORY = "ASSIGN_MEDIA_FILE_CATEGORY";
export const ASSIGN_MEDIA_FILE_PLAYLIST = "ASSIGN_MEDIA_FILE_PLAYLIST";
export const ADD_MEDIA_FILE_COMMENT = "ADD_MEDIA_FILE_COMMENT";
export const ASSIGN_MEDIA_FILEPATH = "ASSIGN_MEDIA_FILEPATH";
export const ADD_MEDIA_FILE_IMAGE = "ADD_MEDIA_FILE_IMAGE";
export const DELETE_MEDIA_FILE = "DELETE_MEDIA_FILE";

export const requestPlaylistCreation = () => ({
    type: REQUEST_PLAYLIST_CREATION
});

export const createPlaylist = (playlistID) => ({
    type: CREATE_PLAYLIST,
    playlistID
});

export const assignPlaylistName = (id, name) => ({
    type: ASSIGN_PLAYLIST_NAME,
    playlistID: id,
    name
});

export const deletePlaylist = (playlistID) => ({
    type: DELETE_PLAYLIST,
    playlistID
});

export const requestCategoryCreation = () => ({
    type: REQUEST_NEW_CATEGORY
});

export const addNewCategory = (categoryID) => ({
    type: ADD_NEW_CATEGORY,
    categoryID
});

export const assignCategoryName = (id, name) => ({
    type: ASSIGN_CATEGORY_NAME,
    categoryID: id,
    name
});

export const deleteCategory = (categoryID) => ({
    type: DELETE_CATEGORY,
    categoryID
});

export const requestFileAddition = (playlistID) => ({
    type: REQUEST_ADD_FILE,
    playlistID
});

export const addMediaFile = (mediaFileID, playlistID) => ({
    type: ADD_MEDIA_FILE,
    mediaFileID,
    playlistID
});

export const assignMediaFileName = (id, name) => ({
    type: ASSIGN_MEDIA_FILE_NAME,
    mediaFileID: id,
    name
});

export const assignMediaFileCategory = (id, categoryID) => ({
    type: ASSIGN_MEDIA_FILE_CATEGORY,
    mediaFileID: id,
    categoryID
});

export const assignMediaFilePlaylist = (id, playlistID) => ({
    type: ASSIGN_MEDIA_FILE_PLAYLIST,
    mediaFileID: id,
    playlistID
});

export const addMediaFileComment = (id, comment) => ({
    type: ADD_MEDIA_FILE_COMMENT,
    mediaFileID: id,
    comment
});

export const assignMediaFilePath = (id, filePath) => ({
    type: ASSIGN_MEDIA_FILEPATH,
    mediaFileID: id,
    filePath
});

export const addMediaFileImage = (id, imageURL) => ({
    type: ADD_MEDIA_FILE_IMAGE,
    mediaFileID: id,
    imageURL
});

export const deleteMediaFile = (mediaFileID) => ({
    type: DELETE_MEDIA_FILE,
    mediaFileID
});