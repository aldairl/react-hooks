import { fireEvent, render, screen } from "@testing-library/react";
import { UserContext } from "../../src/09-useContext/context/UserContext";
import { LoginPage } from "../../src/09-useContext/LoginPage";

describe("Tests in <LoginPage.jsx/> component", () => {
  const setUserMook = jest.fn();

  beforeEach(() => {
    jest.clearAllMocks();
  });

  it("Should show the component without user", () => {
    render(
      <UserContext.Provider value={{ user: null }}>
        <LoginPage />
      </UserContext.Provider>
    );

    // screen.debug()

    const preTag = screen.getByLabelText("userJSON"); //aria-label
    expect(preTag.innerHTML).toBe("null");
  });

  it("Should set user in context executing setUser function", () => {
    render(
      <UserContext.Provider value={{ user: null, setUser: setUserMook }}>
        <LoginPage />
      </UserContext.Provider>
    );

    const loginButton = screen.getByRole("button");
    fireEvent.click(loginButton);

    expect(setUserMook).toHaveBeenCalled();

    // more specific
    expect(setUserMook).toHaveBeenCalledWith({
      email: "aldair@gmail.com",
      id: 123,
      name: "Aldair",
    });
  });
});
