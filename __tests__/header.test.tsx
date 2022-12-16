import React from "react";
import { render } from "@testing-library/react";
import Header from "../components/Header";
import "@testing-library/jest-dom";

describe("Header", () => {
  it("should render the component", () => {
    const { getByText } = render(<Header />);
    expect(getByText("Get In Touch")).toBeInTheDocument();
  });

  it("should render two social icons", () => {
    const { getAllByTestId } = render(<Header />);
    expect(getAllByTestId("social-icon").length).toBe(2);
  });

  it("should render the contact icon", () => {
    const { getByTestId } = render(<Header />);
    expect(getByTestId("contact-icon")).toBeInTheDocument();
  });

  it("should link to the contact section", () => {
    const { getByTestId } = render(<Header />);
    const contactLink = getByTestId("contact-link");
    expect(contactLink.getAttribute("href")).toBe("#contact");
  });
});
