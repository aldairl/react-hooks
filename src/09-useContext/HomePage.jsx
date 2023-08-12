import { useContext } from "react";
import { UserContext } from "./context/UserContext";

export const HomePage = () => {
  const { user } = useContext(UserContext);
  return (
    <section>
      <h1>HomePage</h1>
      <hr />
      <h3>hola {user?.name}</h3>

      <pre aria-label="userJSON">{JSON.stringify(user, null, 3)}</pre>
    </section>
  );
};
