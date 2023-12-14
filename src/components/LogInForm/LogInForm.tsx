import {FC, FormEventHandler, useState } from "react";
import s from "./LogInForm.module.scss";
import EmailInput from "./EmailInput";
type LogInFormProps = {
  logIn: (email: string, pass: string) => void
}
const LogInForm:FC<LogInFormProps> = ({logIn}) => {
  const [pass, setPass] = useState<string>("");
  const handleSubmit:FormEventHandler<HTMLFormElement> = (e) => {
    e.preventDefault()
    // const email = e.currentTarget.email.value
    // const pass = e.currentTarget.pass.value
    // localStorage.setItem(email, pass)
    logIn(e.currentTarget.email.value, e.currentTarget.pass.value)
  }
  return (
    <form
      className={s.form}
      onSubmit={handleSubmit}
    >
      <EmailInput />
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
