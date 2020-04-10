import React from "react";
import ReactDOM from "react-dom";
import { Link, MemoryRouter as Router } from "react-router-dom";
import { shallow, mount } from "enzyme";
import { ConnectedPlaylistItems, PlaylistItems } from "../app/components/playlist_items";
import enzymeConfig from "./enzymeConfig";
import configureStore from "redux-mock-store";
import renderer from "react-test-renderer";
import { Provider } from "react-redux";

describe("ConnectedPlaylistItems Tests", () => {

    const mockStore = configureStore([]);
    let store;
    let component;
    store = mockStore({
        categories: [{
            name: "Classical",
            id: "C1"
        },
        {
            name: "Pop",
            id: "C2"
        },
        {
            name: "Jazz",
            id: "C3"
        }],
        playlist: [{
            name: "Bach Playlist",
            id: "P1"
        }],
        mediaFiles: [{
            id: "M1",
            name: "Ave Maria.wav",
            playlist: "P1",
            filePath: "C:/src/server/public/upload/Ave Maria.wav",
            comment: "This is an audio file"
        }]
    });
    store.dispatch = jest.fn();

    component = renderer.create(
        <Router>
            <Provider store={store}>
                <ConnectedPlaylistItems />
            </Provider>
        </Router>
    );

    it("should dispatch an action on button click", () => {
        renderer.act(() => {
            component.root.findByType("button").props.onClick();
        });
        expect(store.dispatch).toHaveBeenCalledTimes(1);
    });

    it("should insert value to input field", () => {
        renderer.act(() => {
            component.root.findByType("input")
                .props.onChange({ target: { value: "Test Text" } });
        });
    });

    it("Input props test", () => {
        renderer.act(() => {
        expect(component.root.findByType("input").props.onChange({
            placeholder: "Bach Playlist",
            value: "Bach Playlist",
            target: { value: "Test Text" }
        })
    )
    });
})
});
