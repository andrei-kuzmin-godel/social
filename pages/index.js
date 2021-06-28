import Head from 'next/head'
import { getSession } from 'next-auth/client';
import Header from '../components/header'
import Login from '../components/login';
import Sidebar from '../components/sidebar';
import Feed from '../components/feed';
import Widgets from '../components/widgets';
import { db } from '../firebase';

export default function Home({ session, posts }) {
  if (!session) {
    return <Login />
  }

  return (
    <div>
      <Head>
        <title>Social</title>
      </Head>

      <Header />

      <main className="flex bg-gray-100">
        <Sidebar />
        <Feed posts={posts} />
        <Widgets />
      </main>
    </div>
  )
}

export async function getServerSideProps(context) {
  const session = await getSession(context);
  const posts = await db.collection('posts').orderBy('timestamp', 'desc').get();

  const docs = posts.docs.map(post => ({
    id: post.id,
    ...post.data(),
    timestamp: null
  }))

  return {
    props: {
      session,
      posts: docs,
    }
  }
}
