import { render, screen } from "@testing-library/react";
import { HomePage } from "../../src/09-useContext/HomePage";
import { UserContext } from "../../src/09-useContext/context/UserContext";

describe("tests in <HomePage/> component", () => {
  const user = {
    id: 1,
    name: "Aldair",
  };

  test("Should not show the user name", () => {
    render(
      <UserContext.Provider value={{ user: null }}>
        <HomePage />
      </UserContext.Provider>
    );
    // screen.debug();
    const preTag = screen.getByLabelText("userJSON"); //arial-label
    expect(preTag.innerHTML).toBe("null");
  });

  it("Should show the user name in content", () => {
    render(
      <UserContext.Provider value={{ user }}>
        <HomePage />
      </UserContext.Provider>
    );

    const preTag = screen.getByLabelText("userJSON");
    expect(preTag.innerHTML).toContain(user.name);

    const title = screen.getByRole("heading", { level: 3 });
    expect(title.innerHTML).toContain(user.name);
  });
});
