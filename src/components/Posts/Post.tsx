import { FC } from 'react';

type PostProps = {
  title: string;
  body: string;
}
const Post:FC<PostProps> = ({title, body}) => {
  return (
    <div>
      <h3>{title}</h3>
      <p>{body}</p>    
      <hr />  
    </div>
  );
};

export default Post;
