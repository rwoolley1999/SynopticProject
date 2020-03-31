import { createStore, applyMiddleware, combineReducers } from 'redux';
import { defaultState } from './defaultState';
import { createLogger } from 'redux-logger';
import * as mutations from './mutations';
import createSagaMiddleware from 'redux-saga';
import * as sagas from './sagas';
import {loadState, saveState} from '../state/localStorage';

const sagaMiddleware = createSagaMiddleware();

const persistedState = loadState();

export const store = createStore(
    combineReducers({
        playlists(playlists = defaultState.playlists, action){
            switch(action.type){
                case mutations.CREATE_PLAYLIST:
                    return[...playlists, {
                            id: action.playlistID,
                            name: "New Playlist",
                            category: action.categoryID
                    }]
                case mutations.ASSIGN_PLAYLIST_CATEGORY:
                    return playlists.map(playlist=>{
                        return (playlist.id === action.playlistID) ?
                        {...playlist, category: action.categoryID} :
                        playlist;
                    });
                case mutations.ASSIGN_PLAYLIST_NAME:
                    return playlists.map(playlist=>{
                        return (playlist.id === action.playlistID) ?
                        {...playlist, name: action.name} :
                        playlist;
                    });
            }
            return playlists;
        },
        // categories(categories = defaultState.categories, action){
        //     switch(action.type){
        //     case mutations.ADD_NEW_CATEGORY:
        //         return[...categories, {
        //                 id: action.categoryID,
        //                 name: "New Category"
        //         }]
        // }},
        comments(comments = defaultState.comments){
            return comments;
        },
        categories(categories = defaultState.categories){
            return categories;
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
