import Head from 'next/head';
import Link from 'next/link';
import Layout from '../../components/layout';

export default function Me() {
  return (
    <Layout>
      <Head>
        <title>About the Author</title>
      </Head>
      <h1>About the Author</h1>
      <h2>
        <Link href="/">← Back to home</Link>
      </h2>
    </Layout>
  );
}