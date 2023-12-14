import {useState } from "react";
import s from "./LogInForm.module.scss";

const LogInForm = () => {
  const [email, setEmail] = useState<string>("");
  const [pass, setPass] = useState<string>("");

  return (
    <form
      className={s.form}
      // onSubmit={handleSubmit}
    >
      <input
        type="email"
        name="email"
        placeholder="email"
        value={email}
        onChange={(e) => {
          setEmail(e.target.value);
        }}
      />
      <input
        type="password"
        name="pass"
        placeholder="password"
        value={pass}
        onChange={(e) => setPass(e.target.value)}
      />
      <button type="submit">Log In</button>
    </form>
  );
};

export default LogInForm;
