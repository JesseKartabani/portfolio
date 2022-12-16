import { render, screen } from "@testing-library/react";
import Footer from "../components/Footer";
import "@testing-library/jest-dom";

describe("Footer", () => {
  it("renders the footer with an up arrow icon", () => {
    render(<Footer />);
    const footer = screen.getByTestId("footer");
    const icon = screen.getByTestId("icon");
    expect(footer).toBeInTheDocument();
    expect(icon).toBeInTheDocument();
  });

  it("contains a Link element that points to the hero element", () => {
    render(<Footer />);
    const link = screen.getByTestId("hero-link");
    expect(link).toHaveAttribute("href", "#hero");
  });
});
