import React from "react";
import { render } from "@testing-library/react";
import Card from "./Card";

it("Carousel compenant works renders as intended", function () {
  render(<Card />);
});

it("matches snapshot", function () {
  const { asFragment } = render(<Card />);
  console.log(asFragment);
  expect(asFragment()).toMatchSnapshot();
});
