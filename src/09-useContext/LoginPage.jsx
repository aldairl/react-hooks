import { useContext } from "react";
import { UserContext } from "./context/UserContext";

export const LoginPage = () => {
  const { user, setUser } = useContext(UserContext);

  return (
    <section>
      <h1>LoginPage</h1>
      <hr />
      <pre aria-label="userJSON">{JSON.stringify(user, null, 3)}</pre>

      <button
        onClick={() => {
          setUser({ id: 123, name: "Aldair", email: "aldair@gmail.com" });
        }}
        className="btn btn-primary mt-3"
      >
        setUser
      </button>
    </section>
  );
};
