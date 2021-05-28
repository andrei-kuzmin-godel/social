import Head from 'next/head'
import { getSession } from 'next-auth/client';
import Header from '../components/header'
import Login from '../components/login';
import Sidebar from '../components/sidebar';
import Feed from '../components/feed';

export default function Home({ session }) {
  if (!session) {
    return <Login />
  }

  return (
    <div>
      <Head>
        <title>Social</title>
      </Head>

      <Header />

      <main className="flex">
        <Sidebar />
        <Feed />
      </main>
    </div>
  )
}

export async function getServerSideProps(context) {
  const session = await getSession(context);

  return {
    props: {
      session
    }
  }
}
