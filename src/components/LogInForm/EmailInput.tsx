import { useEffect, useState } from 'react';
import { emailValidator } from '../../common/validators';
import s from "./LogInForm.module.scss";

const EmailInput = () => {
  const [email, setEmail] = useState<string>("");
  const [isEmailRight, setIsEmailRight] = useState(false)
  useEffect(() => {
    const timerId = setTimeout( () => {
      if (emailValidator(email)) setIsEmailRight(true)
      else setIsEmailRight(false)
      console.log('rerender');
    }, 1000)
    return () => {
      clearTimeout(timerId)
    }
  }, [email])
  return (
    <input
    type="email"
    name="email"
    placeholder="email"
    value={email}
    onChange={(e) => {
      setEmail(e.target.value);
    }}
    className={isEmailRight ? "" : s.hasError }
  />
  );
};

export default EmailInput;
