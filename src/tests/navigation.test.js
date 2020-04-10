import React from "react";
import ReactDOM from "react-dom";
import { Link, MemoryRouter as Router } from "react-router-dom";
import { shallow } from "enzyme";
import { Navigation } from "../app/components/navigation";
import enzymeConfig from "./enzymeConfig";
import configureStore from "redux-mock-store";

describe("Navigation Tests", () => {
  it("Renders", () => {
    shallow(<Navigation />);
  });

  const wrapper = shallow(<Navigation />);

  it("Link exists", () => {
    expect(wrapper.find(Link).exists()).toBeTruthy();
  });

  it("Correct number of links exist", () => {
    expect(wrapper.find(Link).length).toEqual(1);
  });
});




