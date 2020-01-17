import React from "react";
import { mount } from "enzyme";
import { configure } from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import NavHeader from "../components/NavHeader";

configure({ adapter: new Adapter() });

it("should add transparent bg after scrolling", () => {
    global.innerHeight = 500;
    global.document.height = 1200;
    global.document.scrollTop = 50;

    const wrapper = mount(<NavHeader />);

    global.document.dispatchEvent(new Event("scroll"));
    jest.useFakeTimers();

    const header = wrapper.find(".nav-bar-fix-top").at(0);
    expect(header.hasClass("nav-bar-fix-top")).toBe(true);
});
