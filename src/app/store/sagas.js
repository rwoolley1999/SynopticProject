import { take, put, select} from 'redux-saga/effects';
import * as mutations from './mutations';
import { v4 as uuidv4 } from 'uuid';

export function* playlistCreationSaga(){
    while (true){
        yield take(mutations.REQUEST_PLAYLIST_CREATION);
        const playlistID = uuidv4();
        yield put(mutations.createPlaylist(playlistID))
        console.log("Got playlistID", playlistID);
    }
};

export function* addCategorySaga(){
    while (true){
        yield take(mutations.REQUEST_NEW_CATEGORY);
        const categoryID = uuidv4();
        yield put(mutations.addNewCategory(categoryID))
        console.log("Got categoryID", categoryID);
    }
};

export function* addMediaFile(){
    while(true){
        const {playlistID} = yield take(mutations.REQUEST_ADD_FILE);
        const mediaFileID = "MEDIA"+uuidv4();
        yield put(mutations.addMediaFile(mediaFileID, playlistID));
        console.log("Got Playlist ID", playlistID);
    }
}