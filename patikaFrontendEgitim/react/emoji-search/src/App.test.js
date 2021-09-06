import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import Header from "./Header";
import EmojiResultsRow from "./EmojiResultRow";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-react";


it("renders without crashing", () => {
  const div = document.createElement("div");
  ReactDOM.render(<App />, div);
});

test("header render control", () => {
  const headerDiv = document.createElement("div");
  ReactDOM.render(<Header />, headerDiv)
});

test("emoji list render control", () => {
  render(<EmojiResultsRow />);
  const emojiList = screen.getAllByTestId("emojiRow");
  expect(emojiList.length).toEqual(20);

});

test("copied item control", () => {
  const copiedItem = screen.getByTestId("emoji");
  userEvent.click(copiedItem);
})
