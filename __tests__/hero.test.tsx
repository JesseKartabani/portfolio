import { render } from "@testing-library/react";
import Hero from "../components/Hero";
import "@testing-library/jest-dom";

describe("Hero", () => {
  it('renders the hero"', () => {
    const { getByText } = render(<Hero />);

    const text = getByText("Front End Developer");
    const aboutButton = getByText("About");
    const projectButton = getByText("Projects");
    expect(text).toBeInTheDocument();
    expect(aboutButton).toBeInTheDocument();
    expect(projectButton).toBeInTheDocument();
  });

  it("links to correct places", () => {
    const { getByTestId } = render(<Hero />);

    const about = getByTestId("about-button");
    const projects = getByTestId("projects-button");
    expect(about).toHaveAttribute("href", "#about");
    expect(projects).toHaveAttribute("href", "#projects");
  });
});
