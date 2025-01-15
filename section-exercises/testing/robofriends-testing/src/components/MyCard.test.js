import { shallow, mount, render } from "enzyme";
import React from "react";
import Card from "./Card";

// console.log(shallow(<Card />));

it("expect to render card component", () => {
  expect(shallow(<Card />).length).toEqual(1);
});
