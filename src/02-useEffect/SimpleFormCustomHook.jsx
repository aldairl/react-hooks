import { useForm } from "../hooks/useForm";

export const SimpleFormCustomHook = () => {
  const { username, email, password, onInputchange, onResetForm } = useForm({
    username: "",
    email: "",
    password: "",
  });

  return (
    <>
      <h1>SimpleForm</h1>
      <hr />

      <input
        type="text"
        className="form-control"
        placeholder="username"
        name="username"
        value={username}
        onChange={onInputchange}
      />

      <input
        type="email"
        className="form-control mt-2"
        placeholder="email"
        name="email"
        value={email}
        onChange={onInputchange}
      />

      <input
        type="password"
        className="form-control mt-2"
        placeholder="password"
        name="password"
        value={password}
        onChange={onInputchange}
      />

      <button onClick={onResetForm} className="btn btn-danger mt-2">Reset</button>
    </>
  );
};
