import { useCollection } from 'react-firebase-hooks/firestore';
import { db } from '../firebase';
import Post from './post';

function Posts({ posts }) {
  const [realtimePosts] = useCollection(
    db.collection('posts').orderBy('timestamp', 'desc')
  );

  return (
    <div>
      {
        realtimePosts
          ? realtimePosts?.docs.map(post => {
              const { id, name, message, email, timestamp, image, postImage } = post.data();
              return (
                <Post
                  key={id}
                  name={name}
                  message={message}
                  email={email}
                  timestamp={timestamp}
                  image={image}
                  postImage={postImage}
                />
              )
            })
          : posts.map(post => {
            const { id, name, message, email, timestamp, image, postImage } = post;
            return (
              <Post
                key={id}
                name={name}
                message={message}
                email={email}
                timestamp={timestamp}
                image={image}
                postImage={postImage}
              />
            )
          })
      }
    </div>
  )
}

export default Posts
