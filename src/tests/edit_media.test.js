import React from "react";
import ReactDOM from "react-dom";
import { Link, MemoryRouter as Router } from "react-router-dom";
import { shallow, mount } from "enzyme";
import { ConnectedEditMedia } from "../app/components/edit_media";
import enzymeConfig from "./enzymeConfig";
import configureStore from "redux-mock-store";
import renderer from "react-test-renderer";
import { Provider } from "react-redux";
import axios from "axios";

describe("ConnectedEditCategories Tests", () => {

    const mockStore = configureStore([]);
    let store;
    let component;
    store = mockStore({
        categories:[{
            name:"Classical",
            id: "C1"
        },
        {
            name:"Pop",
            id:"C2"
        },
        {
            name:"Jazz",
            id:"C3"
        }],
        playlists:[{
            name:"Bach Playlist",
            id:"P1"
        },
        {
            name:"1960s",
            id: "P2"
        }],
        mediaFile:[{
            id:"M1",
            name:"Ave Maria.wav",
            playlist:"P1",
            filePath:"C:/src/server/public/upload/Ave Maria.wav",
            comment:"This is an audio file"
        }]
    });
    store.dispatch = jest.fn();


    component = renderer.create(
        <Router>
            <Provider store={store}>
                <ConnectedEditMedia />
            </Provider>
        </Router>
    );

    it("should insert value to input field", () => {
        renderer.act(() => {
            component.root.findByType("select")
                .props.onChange( { 
                    value: "Ave Maria.wav",
                    target: { value: "Test Text" }
                 } );
        });
    });

    let mock = jest.spyOn(axios, "post");

    it("Checks axios is posting", async()=>{
        expect(mock).toHaveBeenCalled;
    });

    it("Form submits to server", async()=>{
        renderer.act(() => {
            component.root.findByType("form")
                .props.onSubmit();
        });
     expect(mock).toHaveBeenCalled;
    });

});
