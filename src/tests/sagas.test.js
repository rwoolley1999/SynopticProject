import { playlistCreationSaga, addCategorySaga, addMediaFile } from "../app/store/sagas";
import * as mutations from "../app/store/mutations";
import { take, put } from "redux-saga/effects";
import enzymeConfig from "./enzymeConfig";

describe("Saga & mutations tests", () => {

  it("Should wait for REQUEST_PLAYLIST_CREATION", () => {
    const saga = playlistCreationSaga();
    expect(saga.next().value)
      .toEqual(take("REQUEST_PLAYLIST_CREATION"));
  });

  it("Should wait for REQUEST_NEW_CATEGORY", () => {
    const saga = addCategorySaga();
    expect(saga.next().value)
      .toEqual(take("REQUEST_NEW_CATEGORY"));
  });


  it("Should wait for REQUEST_ADD_FILE", () => {
    const saga = addMediaFile();
    expect(saga.next().value)
      .toEqual(take("REQUEST_ADD_FILE"));
  });

});