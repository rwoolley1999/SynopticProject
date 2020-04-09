import { createStore, applyMiddleware, combineReducers } from 'redux';
import { defaultState } from './default_state';
import { createLogger } from 'redux-logger';
import * as mutations from './mutations';
import createSagaMiddleware from 'redux-saga';
import * as sagas from './sagas';
import {loadState, saveState } from '../state/local_storage';
// import { saveFile } from '../state/saveFile';

const sagaMiddleware = createSagaMiddleware();

export const persistedState = loadState();

export const store = createStore(
    combineReducers({
        playlists(playlists = defaultState.playlists, action){
            switch(action.type){
                case mutations.CREATE_PLAYLIST:
                    return[...playlists, {
                            id: action.playlistID,
                            name: "New Playlist"
                    }]
                case mutations.ASSIGN_PLAYLIST_NAME:
                    return playlists.map(playlist=>{
                        return (playlist.id === action.playlistID) ?
                        {...playlist, name: action.name} :
                        playlist;
                    });
                case mutations.DELETE_PLAYLIST:
                    return playlists.filter(playlist=>{
                        return(playlist.id !== action.playlistID);
                    });
            }
            return playlists;
        },
        categories(categories = defaultState.categories, action){
            switch(action.type){
            case mutations.ADD_NEW_CATEGORY:
                return[...categories, {
                        id: action.categoryID,
                        name: "New Category"
                }]
            case mutations.ASSIGN_CATEGORY_NAME:
                return categories.map(category=>{
                    return (category.id === action.categoryID) ?
                        {...category, name: action.name} :
                        category;
                    });
            case mutations.DELETE_CATEGORY:
                return categories.filter(category=>{
                    return(category.id !== action.categoryID);
                    });
        }
        return categories;
        },
        mediaFiles(mediaFiles = defaultState.mediaFiles, action){
            switch(action.type){
                case mutations.ADD_MEDIA_FILE:
                    return[...mediaFiles, {
                            id: action.mediaFileID,
                            name: "New Media File",
                            playlist:action.playlistID
                    }]
                case mutations.ASSIGN_MEDIA_FILE_NAME:
                    return mediaFiles.map(mediaFile=>{
                        return (mediaFile.id === action.mediaFileID) ?
                            {...mediaFile, name: action.name} :
                            mediaFile;
                    });
                case mutations.ASSIGN_MEDIA_FILE_CATEGORY:
                    return mediaFiles.map(mediaFile=>{
                        return (mediaFile.id === action.mediaFileID) ? 
                            {...mediaFile, category:action.categoryID} : 
                            mediaFile;
                    });
                case mutations.ASSIGN_MEDIA_FILE_PLAYLIST:
                    return mediaFiles.map(mediaFile=>{
                        return (mediaFile.id === action.mediaFileID) ? 
                            {...mediaFile, playlist:action.playlistID} : 
                            mediaFile;
                    });
                case mutations.ADD_MEDIA_FILE_COMMENT:
                    return mediaFiles.map(mediaFile=>{
                        return (mediaFile.id === action.mediaFileID) ? 
                            {...mediaFile, comment:action.comment} : 
                            mediaFile;
                    });
                case mutations.ASSIGN_MEDIA_FILEPATH:
                    return mediaFiles.map(mediaFile=>{
                        return (mediaFile.id === action.mediaFileID) ?
                            {...mediaFile, filePath: action.filePath} :
                            mediaFile;
                    });
                case mutations.DELETE_MEDIA_FILE:
                    return mediaFiles.filter(mediaFile=>{
                        return(mediaFile.id !== action.mediaFileID);
                    });
        }
            return mediaFiles;
    },
    }),
    persistedState,
    applyMiddleware(createLogger(), sagaMiddleware)
);

store.subscribe(()=>{
    saveState(store.getState());
});


for (let saga in sagas){
    sagaMiddleware.run(sagas[saga]);
}
