import { useState } from 'react';
import { emailValidator } from '../../common/validators';
import s from "./LogInForm.module.scss";

const EmailInput = () => {
  const [email, setEmail] = useState<string>("");
  const [isEmailWrong, setIsEmailWrong] = useState(false)
  return (
    <input
    type="email"
    name="email"
    placeholder="email"
    value={email}
    onChange={(e) => {
      setEmail(e.target.value);
      if (emailValidator(e.target.value)) setIsEmailWrong(false)
      else setIsEmailWrong(true)
    }}
    className={isEmailWrong ? s.hasError : ""}
  />
  );
};

export default EmailInput;
