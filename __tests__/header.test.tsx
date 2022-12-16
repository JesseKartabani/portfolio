import { render } from "@testing-library/react";
import Header from "../components/Header";
import "@testing-library/jest-dom";

describe("Header", () => {
  it("render the component", () => {
    const { getByText } = render(<Header />);
    expect(getByText("Get In Touch")).toBeInTheDocument();
  });

  it("render two social icons", () => {
    const { getAllByTestId } = render(<Header />);
    expect(getAllByTestId("social-icon").length).toBe(2);
  });

  it("render the contact icon", () => {
    const { getByTestId } = render(<Header />);
    expect(getByTestId("contact-icon")).toBeInTheDocument();
  });

  it("link to the contact section", () => {
    const { getByTestId } = render(<Header />);
    const contactLink = getByTestId("contact-link");
    expect(contactLink.getAttribute("href")).toBe("#contact");
  });
});
