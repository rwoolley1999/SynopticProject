import { take, put, select} from 'redux-saga/effects';
import * as mutations from './mutations';
import { v4 as uuidv4 } from 'uuid';

export function* playlistCreationSaga(){
    while (true){
        const {categoryID} = yield take(mutations.REQUEST_PLAYLIST_CREATION);
        const playlistID = uuidv4();
        yield put(mutations.createPlaylist(playlistID, categoryID))
        // console.log("Got categoryID", categoryID);
    }
};

// export function* addCategorySaga(){
//     while (true){
//         const categoryID = uuidv4();
//         yield put(mutations.addNewCategory(categoryID))
//         console.log("Got Category ID", categoryID)
//     }
// };