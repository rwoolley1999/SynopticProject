import React from "react";
import ReactDOM from "react-dom";
import { shallow, mount } from "enzyme";
import { Main } from "../app/components/Main";
import enzymeConfig from "./enzymeConfig";


describe("Main Tests", () => {
  it("renders", () => {
    shallow(<Main />);
  });

  const wrapper = mount(
    <Main />
  );

  it("renders intitial heading as Media Organiser", () => {
    const pageHeading = wrapper.find("h1").first().text()
    expect(pageHeading).toEqual("Media Organiser");
  });
});