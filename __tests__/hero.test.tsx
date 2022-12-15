import { render, screen } from "@testing-library/react";
import Hero from "../components/Hero";
import "@testing-library/jest-dom";

describe("Hero", () => {
  it('renders the text "Front End Developer"', () => {
    render(<Hero />);
    const text = screen.getByText("Front End Developer");
    expect(text).toBeInTheDocument();
  });

  it("renders the About button", () => {
    render(<Hero />);
    const button = screen.getByText("About");
    expect(button).toBeInTheDocument();
  });

  it("renders the Projects button", () => {
    render(<Hero />);
    const button = screen.getByText("Projects");
    expect(button).toBeInTheDocument();
  });
});
