import { render } from "@testing-library/react";
import ContactMe from "../components/ContactMe";
import "@testing-library/jest-dom";

describe("ContactMe", () => {
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

  it("renders the contact form", () => {
    const { getByPlaceholderText } = render(<ContactMe />);

    expect(getByPlaceholderText("Name")).toBeInTheDocument();
    expect(getByPlaceholderText("Email")).toBeInTheDocument();
    expect(getByPlaceholderText("Subject")).toBeInTheDocument();
    expect(getByPlaceholderText("Message")).toBeInTheDocument();
  });

  test("displays correct email and phone number", () => {
    const { getByText } = render(<ContactMe />);

    expect(getByText("jessekartabani@gmail.com")).toBeInTheDocument();
    expect(getByText("+61 452 515 822")).toBeInTheDocument();
  });
});
