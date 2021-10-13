import Post from './Post';

const posts = [
  {
    id: 123,
    username: 'alieslam',
    userImg: 'https://i.imgur.com/5MpPPZP.jpeg',
    img: 'https://i.imgur.com/5MpPPZP.jpeg',
    caption: 'App with React-Next-Firebase!!!!!',
  },
  {
    id: 1234,
    username: 'omareslam',
    userImg: 'https://i.imgur.com/5MpPPZP.jpeg',
    img: 'https://i.imgur.com/5MpPPZP.jpeg',
    caption: 'App with React-Next-Firebase!!!!!',
  }
];

function Posts() {
  return (
    <div>
      {posts.map(post => (
        <Post
          key={post.id}
          id={post.id}
          username={post.username}
          userImg={post.userImg}
          img={post.img}
          caption={post.caption}
        />
      ))}
      <Post />
    </div>
  );
}

export default Posts;
