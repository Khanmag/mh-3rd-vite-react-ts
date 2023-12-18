import { useContext } from "react";
import AuthContext from "../../context/authContext";

const Header = () => {
  const { isAuth, logOut } = useContext(AuthContext);
  return (
    <header>
      {isAuth && <button onClick={logOut}>Log Out</button>}
    </header>
  );
};

export default Header;
