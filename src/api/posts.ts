

export const getPosts = async () => {
  const data = await fetch('https://jsonplaceholder.typicode.com/posts').then(res => res.json())
  return data
}

export const anyGetPosts = () => {
  return fetch('https://jsonplaceholder.typicode.com/posts')
}
