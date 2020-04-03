import { createStore, applyMiddleware, combineReducers } from 'redux';
import { defaultState } from './defaultState';
import { createLogger } from 'redux-logger';
import * as mutations from './mutations';
import createSagaMiddleware from 'redux-saga';
import * as sagas from './sagas';
import {loadState, saveState } from '../state/localStorage';
// import { saveFile } from '../state/saveFile';
// import testData from "../state/state.json" SORT THIS OUT TOMORROW!!!!!!!!!!!!!!!!!!!

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
                            name: "New Media File"
                    }]
        }
            return mediaFiles;
    },
        comments(comments = defaultState.comments){
            return comments;
        }
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
