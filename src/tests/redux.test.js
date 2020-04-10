import React from "react";
import ReactDOM from "react-dom";
import { mount } from "enzyme";
import * as mutations from "../app/store/mutations";
import enzymeConfig from "./enzymeConfig";
import { v4 as uuidv4 } from "uuid";

describe("Redux actions tests", () => {
    it("Creates a playlist", () => {
        const playlistID = uuidv4();

        const expectedAction = {
            type: mutations.CREATE_PLAYLIST,
            playlistID
        }

        expect(mutations.createPlaylist(playlistID)).toEqual(expectedAction);
    });

    
    it("Deletes a category", () => {
        const categoryID = uuidv4();

        const expectedAction = {
            type: mutations.DELETE_CATEGORY,
            categoryID
        }

        expect(mutations.deleteCategory(categoryID)).toEqual(expectedAction);
    });

    it("Adds a comment to a media file", () => {
        const mediaFileID = uuidv4();
        const comment = "Test Comment"

        const expectedAction = {
            type: mutations.ADD_MEDIA_FILE_COMMENT,
            mediaFileID,
            comment
        }

        expect(mutations.addMediaFileComment(mediaFileID, comment)).toEqual(expectedAction);
    });

    it("Adds playlist comment", () => {
        // I expect this test to fail, as by running it I discovered that I was attempting to test code I had removed when refactoring
        const playlistID = uuidv4();
        const commentID = uuidv4();
        const content = "Test Comment";

        const expectedAction = {
            type: mutations.ADD_PLAYLIST_COMMENT,
            id: commentID,
            playlist: playlistID,
            content
        }

        expect(mutations.addPlaylistComment(commentID, playlistID, content)).toEqual(expectedAction);
    });
});
