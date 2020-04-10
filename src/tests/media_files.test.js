import React from 'react';
import ReactDOM from 'react-dom';
import { Link, MemoryRouter as Router } from 'react-router-dom';
import { shallow, mount } from 'enzyme';
import { ConnectedMedia } from '../app/components/media_files';
import enzymeConfig from './enzymeConfig';
import configureStore from 'redux-mock-store';
import renderer from 'react-test-renderer';
import { Provider } from 'react-redux';

describe("ConnectedMedia Tests", () => {

    const mockStore = configureStore([]);
    let store;
    let component;
    store = mockStore({
        mediaFiles: [{
            id: "M1",
            name: "Ave Maria.wav",
            playlist: "P1",
            filePath: "C:/src/server/public/upload/Ave Maria.wav",
            comment: "This is an audio file"
        }],
    });
    store.dispatch = jest.fn();

    component = renderer.create(
        <Router>
            <Provider store={store}>
                <ConnectedMedia />
            </Provider>
        </Router>
    );

    it("Button exists", () => {
        expect(component.root.findByType("button")).toBeTruthy();
    });

    it("should dispatch an action on button click", () => {
        renderer.act(() => {
            component.root.findByType("button").props.onClick();
        });
        expect(store.dispatch).toHaveBeenCalledTimes(1);
    });

    it("Link exists", () => {
        expect(component.root.findByType(Link)).toBeTruthy();
    });

});




