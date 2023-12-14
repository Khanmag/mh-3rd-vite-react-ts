import { useEffect, useState } from "react";
import Post from "./Post";
import { anyGetPosts } from "../../api/posts";
// import { getPosts } from "../../api/posts";

type PostType = {
  userId: number;
  id: number;
  title: string;
  body: string;
}
const PostList = () => {
  const [posts, setPosts] = useState<PostType[]>([]);

  useEffect(() => {
    // (async () => {
    //   const data = await getPosts()
    //   setPosts(data)
    // })()
    anyGetPosts().then( res => {
      if (res.status === 200) return res.json()
      else throw new Error('some error')
    })
    .then( data => {setPosts(data)})
    .catch( e => console.error(e.message));
  }, []);
  return (
    <div>
      <h2>posts</h2>
      {posts.map(item => <Post key={item.id} title={item.title} body={item.body}  />)}
      {posts.length === 0 && <p>Постов нет</p>}
    </div>
  );
};

export default PostList;
