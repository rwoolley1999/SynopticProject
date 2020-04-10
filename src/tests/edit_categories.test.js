import React from "react";
import ReactDOM from "react-dom";
import { Link, MemoryRouter as Router } from "react-router-dom";
import { ConnectedEditCategories } from "../app/components/edit_categories";
import enzymeConfig from "./enzymeConfig";
import configureStore from "redux-mock-store";
import renderer from "react-test-renderer";
import { Provider } from "react-redux";

describe("ConnectedEditCategories Unit Tests", () => {

    const mockStore = configureStore([]);
    let store;
    let component;
    store = mockStore({
        categories:[{
            name:"Classical",
            id: "C1"
        }]
    });
    store.dispatch = jest.fn();

    component = renderer.create(
        <Router>
            <Provider store={store}>
                <ConnectedEditCategories />
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
            value: "Classical",
            target: { value: "Test Text" }
        })
    )
    });
})
});
