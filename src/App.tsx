import { useEffect, useState } from "react";
import LogInForm from "./components/LogInForm/LogInForm";
import PostList from "./components/Posts/PostList";
import AuthContext from "./context/authContext";

function App() {
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
    <>
      {isAuth ? (
        <div>
          <h2>HI USER</h2>
          <button onClick={logOut}>Log Out</button>
        </div>
      ) : (
        <LogInForm logIn={logIn} />
      )}
      <AuthContext.Provider value={{isAuth}}>
        <PostList />
      </AuthContext.Provider>
      
    </>
  );
}

export default App;
