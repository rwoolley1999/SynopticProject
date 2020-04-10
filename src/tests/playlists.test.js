import React from "react";
import ReactDOM from "react-dom";
import { Link,MemoryRouter as Router } from "react-router-dom";
import { shallow, mount } from "enzyme";
import { Playlists, ConnectedPlaylists } from "../app/components/playlists";
import enzymeConfig from "./enzymeConfig";
import configureStore from "redux-mock-store";
import renderer from "react-test-renderer";
import { Provider } from "react-redux";

describe("ConnectedPlaylists Tests", () => {

  const mockStore = configureStore([]);
  let store;
  let component;
    store = mockStore({
      playlists: [{
        name:"Bach Playlist",
        id:"P1"
    },
    {
        name:"1960s",
        id: "P2"
    }],
    });
    store.dispatch = jest.fn();

  component = renderer.create(
    <Router>
    <Provider store={store}>
      <ConnectedPlaylists />
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

  it("h3 exists", () => {
    expect(component.root.findByType("h3")).toBeTruthy();
  });

});




