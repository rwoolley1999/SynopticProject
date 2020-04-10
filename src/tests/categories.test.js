import React from "react";
import ReactDOM from "react-dom";
import { Link, MemoryRouter as Router } from "react-router-dom";
import { shallow, mount } from "enzyme";
import { ConnectedCategories } from "../app/components/categories";
import enzymeConfig from "./enzymeConfig";
import configureStore from "redux-mock-store";
import renderer from "react-test-renderer";
import { Provider } from "react-redux";
import * as store from "../app/store";


describe("ConnectedCategories Unit Tests", () => {

    const mockStore = configureStore([]);
    let store;
    let component;
    store = mockStore({
        categories: [{
            name: "Classical",
            id: "C1"
        }]
    });
    store.dispatch = jest.fn();

    component = renderer.create(
        <Router>
            <Provider store={store}>
                <ConnectedCategories />
            </Provider>
        </Router>
    );

    it("should dispatch an action on button click", () => {
        renderer.act(() => {
            component.root.findByType("button").props.onClick();
        });
        expect(store.dispatch).toHaveBeenCalledTimes(1);
    });

    it("should render category names", () => {
        let wrapper = mount(<Provider store={store}><ConnectedCategories /></Provider>);
        expect(wrapper.find("categories").text()).toEqual(name);
    });
})




