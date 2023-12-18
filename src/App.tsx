// import PostList from "./components/Posts/PostList";
// import Header from "./components/Header/Header";
// import { useContext } from "react";
// import AuthContext from "./context/authContext";
// import LogInForm from "./components/LogInForm/LogInForm";
import TestRerender from "./components/TestRerender/TestRerender";

function App() {
  // const {isAuth} = useContext(AuthContext)
  console.log('APP render');
  return (
    <>
      {/* <Header />
      {isAuth ? <PostList /> : <LogInForm/>} */}
      <TestRerender />      
    </>
  );
}

export default App;
