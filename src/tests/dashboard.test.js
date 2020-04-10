import React from "react";
import { Link,MemoryRouter as Router } from "react-router-dom";
import { shallow, mount } from "enzyme";
import { Dashboard } from "../app/components/dashboard";
import enzymeConfig from "./enzymeConfig";
import {store} from "../app/store/index";

describe("Dashboard Unit Tests", () => {
  it("Renders", () => {
    shallow(<Dashboard />);
  });

  const wrapper = shallow(<Dashboard />);

  it("Link exists", () => {
    expect(wrapper.find(Link).exists()).toBeTruthy();
  });

  it("Correct number of links exist", ()=>{
    expect(wrapper.find(Link).length).toEqual(2);
  });
});



