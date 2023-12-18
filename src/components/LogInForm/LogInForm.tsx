import { FormEventHandler, useContext, useState } from "react";
import s from "./LogInForm.module.scss";
import EmailInput from "./EmailInput";
import AuthContext from "../../context/authContext";

const LogInForm= () => {
  const [pass, setPass] = useState<string>("");
  const {logIn} = useContext(AuthContext)
  const handleSubmit: FormEventHandler<HTMLFormElement> = (e) => {
    e.preventDefault();
    logIn(e.currentTarget.email.value, e.currentTarget.pass.value);
  };
  return (
    <form className={s.form} onSubmit={handleSubmit}>
      <EmailInput />
      <input
        type="password"
        name="pass"
        placeholder="password"
        value={pass}
        onChange={(e) => setPass(e.target.value)}
      />
      <button
        type="submit"
        //  disabled={isEmailRight}
      >
        Log In
      </button>
    </form>
  );
};

export default LogInForm;
