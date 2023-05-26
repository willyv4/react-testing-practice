import React from "react";
import { render, fireEvent } from "@testing-library/react";
import Carousel from "./Carousel";

it("works when you click on the right arrow", function () {
  const { queryByTestId, queryByAltText } = render(<Carousel startNum={0} />);

  expect(
    queryByAltText("Photo by Richard Pasquarella on Unsplash")
  ).toBeInTheDocument();
  expect(
    queryByAltText("Photo by Pratik Patel on Unsplash")
  ).not.toBeInTheDocument();

  const rightArrow = queryByTestId("right-arrow");
  fireEvent.click(rightArrow);

  expect(
    queryByAltText("Photo by Richard Pasquarella on Unsplash")
  ).not.toBeInTheDocument();
  expect(
    queryByAltText("Photo by Pratik Patel on Unsplash")
  ).toBeInTheDocument();
});

it("Carousel compenant works renders as intended", function () {
  render(<Carousel startNum={0} />);
});

it("matches snapshot", function () {
  const { asFragment } = render(<Carousel startNum={0} />);
  expect(asFragment()).toMatchSnapshot();
});

it("works when you click on the left arrow", () => {
  const { queryByTestId, queryByAltText } = render(<Carousel startNum={1} />);

  expect(
    queryByAltText("Photo by Pratik Patel on Unsplash")
  ).toBeInTheDocument();

  expect(
    queryByAltText("Photo by Richard Pasquarella on Unsplash")
  ).not.toBeInTheDocument();

  const leftArrow = queryByTestId("left-arrow");
  fireEvent.click(leftArrow);

  expect(
    queryByAltText("Photo by Pratik Patel on Unsplash")
  ).not.toBeInTheDocument();
  expect(
    queryByAltText("Photo by Richard Pasquarella on Unsplash")
  ).toBeInTheDocument();
});

it("left arrow is missing on first image and right arrow is missing on last image", () => {
  const { queryByTestId } = render(<Carousel startNum={0} />);
  const leftArrow = queryByTestId("left-arrow");
  const rightArrow = queryByTestId("right-arrow");

  expect(leftArrow).toHaveClass("arrow-hidden");
  expect(rightArrow).toHaveClass("arrow-visible");

  fireEvent.click(rightArrow);

  expect(leftArrow).toHaveClass("arrow-visible");
  expect(rightArrow).toHaveClass("arrow-visible");

  fireEvent.click(rightArrow);

  expect(leftArrow).toHaveClass("arrow-visible");
  expect(rightArrow).toHaveClass("arrow-hidden");
});
