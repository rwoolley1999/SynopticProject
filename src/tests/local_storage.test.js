import React from "react";
import ReactDOM from "react-dom";
import { Link, MemoryRouter as Router } from "react-router-dom";
import { shallow, mount } from "enzyme";
import { LoadState, SaveState } from "../app/state/local_storage";
import enzymeConfig from "./enzymeConfig";
import configureStore from "redux-mock-store";
import renderer from "react-test-renderer";
import { Provider } from "react-redux";
import axios from "axios";

describe("local_storage tests", () => {

    let mock = jest.spyOn(axios, "post");

    it("Checks axios is posting", async () => {
        expect(mock).toHaveBeenCalled;
    });

})

