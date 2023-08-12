import { render, screen } from "@testing-library/react";
import { MainApp } from "../../src/09-useContext";
import { MemoryRouter } from "react-router-dom";

describe("Test in <MainApp.jsx/> component", () => {
  it("Should render the home page", () => {
    render(
      <MemoryRouter>
        <MainApp />
      </MemoryRouter>
    );
    // screen.debug()

    expect(screen.getByText("HomePage")).toBeTruthy();
  });

  it("Should render the LoginPage", () => {
    render(
      <MemoryRouter initialEntries={["/login"]}>
        <MainApp />
      </MemoryRouter>
    );
    // screen.debug()

    expect(screen.getByText("LoginPage")).toBeTruthy();

    // test the active class is in element
    const linkActive = screen.getByText("Login");
    expect(linkActive.className).toContain('active')
  });
});
