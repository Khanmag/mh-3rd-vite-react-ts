import PostList from "./components/Posts/PostList";
import Header from "./components/Header/Header";
import { useContext } from "react";
import AuthContext from "./context/authContext";
import LogInForm from "./components/LogInForm/LogInForm";
// import TestRerender from "./components/TestRerender/TestRerender";

function App() {
  const {isAuth} = useContext(AuthContext)
  return (
    <>
      <Header />
      {/* {isAuth ? <PostList /> : <LogInForm/>} */}
      {!isAuth && <LogInForm />}
      <PostList />
      {/* <TestRerender />       */}
    </>
  );
}

export default App;
