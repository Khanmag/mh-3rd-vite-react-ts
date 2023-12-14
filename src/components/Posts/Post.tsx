import { FC, useContext } from 'react';
import AuthContext from '../../context/authContext';

type PostProps = {
  title: string;
  body: string;
}
const Post:FC<PostProps> = ({title, body}) => {
  const {isAuth} = useContext(AuthContext)
  return (
    <div>
      <h3>{title}</h3>
      <p>{body}</p>
      {/* <AuthContext.Consumer>
        { (contextData) => {
          return contextData.isAuth && <button>add comment</button> 
        }}
      </AuthContext.Consumer> */}
      {isAuth && <button>add comment</button> }  
      <hr />  
    </div>
  );
};

export default Post;
