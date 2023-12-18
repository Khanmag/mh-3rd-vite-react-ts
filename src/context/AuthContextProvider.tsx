import { ReactNode, useEffect, useState } from 'react';
import AuthContext from './authContext';

const AuthContextProvider = ({children}:{children:ReactNode}) => {
  const [isAuth, setIsAuth] = useState(false);
  const logIn = (email: string, pass: string) => {
    setIsAuth(true);
    localStorage.setItem(email, pass);
  };
  const logOut = () => {
    localStorage.clear()
    setIsAuth(false)
  }
  useEffect(() => {
    if (localStorage.length) setIsAuth(true);
    else setIsAuth(false);
  }, []);
  return (
    <AuthContext.Provider value={{isAuth, logIn, logOut}}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthContextProvider;
