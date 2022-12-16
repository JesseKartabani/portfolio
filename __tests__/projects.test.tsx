import { render } from "@testing-library/react";
import Projects from "../components/Projects";
import "@testing-library/jest-dom";

describe("Projects", () => {
  beforeEach(() => {
    // IntersectionObserver isn't available in test environment
    const mockIntersectionObserver = jest.fn();
    mockIntersectionObserver.mockReturnValue({
      observe: () => null,
      unobserve: () => null,
      disconnect: () => null,
    });
    window.IntersectionObserver = mockIntersectionObserver;
  });

  test("renders the correct number of projects", () => {
    const { getAllByTestId } = render(<Projects />);
    const projectCards = getAllByTestId("project-card");
    expect(projectCards.length).toBe(6);
  });

  test("renders the correct project names", () => {
    const { getAllByTestId } = render(<Projects />);
    const projectCards = getAllByTestId("project-card");
    expect(projectCards[0].textContent).toContain("Clash Of Clans Stats");
    expect(projectCards[1].textContent).toContain("PokeDex");
    expect(projectCards[2].textContent).toContain("Uber Clone");
    expect(projectCards[3].textContent).toContain("Netflix Clone");
    expect(projectCards[4].textContent).toContain("NBA Stats");
    expect(projectCards[5].textContent).toContain("Portfolio");
  });

  test("renders the correct project descriptions", () => {
    const { getAllByTestId } = render(<Projects />);
    const projectCards = getAllByTestId("project-card");
    expect(projectCards[0].textContent).toContain(
      "Cross-platform mobile and web app for tracking and displaying statistics for the popular mobile game Clash of Clans"
    );
    expect(projectCards[1].textContent).toContain(
      "Digital encyclopedia of Pokemon characters"
    );
    expect(projectCards[2].textContent).toContain(
      "This Uber clone uses several external APIs to provide its functionality"
    );
    expect(projectCards[3].textContent).toContain(
      "Clone of the popular streaming service Netflix"
    );
    expect(projectCards[4].textContent).toContain(
      "Cross-platform mobile and web app for tracking and displaying NBA statistics"
    );
    expect(projectCards[5].textContent).toContain("");
  });

  it("renders the correct links for the Code buttons of each project", () => {
    const { getAllByTestId } = render(<Projects />);
    const codeButtons = getAllByTestId("code-button");
    expect(codeButtons[0]).toHaveAttribute(
      "href",
      "https://github.com/JesseKartabani/clash-of-clans-stats"
    );
    expect(codeButtons[1]).toHaveAttribute(
      "href",
      "https://github.com/JesseKartabani/Pokedex"
    );
    expect(codeButtons[2]).toHaveAttribute(
      "href",
      "https://github.com/JesseKartabani/Uber-clone"
    );
    expect(codeButtons[3]).toHaveAttribute(
      "href",
      "https://github.com/JesseKartabani/netflix-clone"
    );
    expect(codeButtons[4]).toHaveAttribute(
      "href",
      "https://github.com/JesseKartabani/nba-stats"
    );
    expect(codeButtons[5]).toHaveAttribute(
      "href",
      "https://github.com/JesseKartabani/portfolio"
    );
  });

  it("renders the correct links for the Website buttons of each project", () => {
    // Not every website has a link thats why some are missing
    const { getAllByTestId } = render(<Projects />);
    const websiteButtons = getAllByTestId("website-button");
    expect(websiteButtons[0]).toHaveAttribute(
      "href",
      "https://pokedex-c348e.web.app/"
    );
    expect(websiteButtons[1]).toHaveAttribute(
      "href",
      "https://netflix-clone-528b0.web.app/"
    );
    expect(websiteButtons[2]).toHaveAttribute(
      "href",
      "https://nba-stats-3da74.web.app/"
    );
  });

  it("renders the correct images for each project", () => {
    const { getAllByTestId } = render(<Projects />);
    const images = getAllByTestId("project-image");
    expect(images[0]).toHaveAttribute(
      "src",
      expect.stringContaining("cocProject.png")
    );
    expect(images[1]).toHaveAttribute(
      "src",
      expect.stringContaining("pokedexProject.png")
    );
    expect(images[2]).toHaveAttribute(
      "src",
      expect.stringContaining("uberProject.png")
    );
    expect(images[3]).toHaveAttribute(
      "src",
      expect.stringContaining("netflixProject.png")
    );
    expect(images[4]).toHaveAttribute(
      "src",
      expect.stringContaining("nbaProject.png")
    );
    expect(images[5]).toHaveAttribute(
      "src",
      expect.stringContaining("portfolioProject.png")
    );
  });
});
