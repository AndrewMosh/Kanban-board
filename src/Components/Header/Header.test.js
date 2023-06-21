import React from "react";
import { render, screen } from "@testing-library/react";
import Header from "./Header";

describe("Header", () => {
  it("renders without crashing", () => {
    render(<Header />);
  });

  it("displays the header text", () => {
    render(<Header />);
    const headerText = screen.getByText(/Awesome Kanban Board/i);
    expect(headerText).toBeInTheDocument();
  });

  it("displays the user avatar", () => {
    render(<Header />);
    const avatar = screen.getByAltText("avatar");
    expect(avatar).toBeInTheDocument();
  });

  it("displays the profile link", () => {
    render(<Header />);
    const profileLink = screen.getByText(/Profile/i);
    expect(profileLink).toBeInTheDocument();
  });

  it("displays the log out link", () => {
    render(<Header />);
    const logOutLink = screen.getByText(/Log out/i);
    expect(logOutLink).toBeInTheDocument();
  });

  it("displays the down arrow icon", () => {
    render(<Header />);
    const downArrow = screen.getByAltText("");
    expect(downArrow).toBeInTheDocument();
  });
});
