import { render } from "@testing-library/react";
import Footer from "../components/Footer";
import "@testing-library/jest-dom";

describe("Footer", () => {
  it("renders the footer with an up arrow icon", () => {
    const { getByTestId } = render(<Footer />);
    const footer = getByTestId("footer");
    const icon = getByTestId("icon");
    expect(footer).toBeInTheDocument();
    expect(icon).toBeInTheDocument();
  });

  it("contains a Link element that points to the hero element", () => {
    const { getByTestId } = render(<Footer />);
    const link = getByTestId("hero-link");
    expect(link).toHaveAttribute("href", "#hero");
  });
});
