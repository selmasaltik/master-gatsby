import React from 'react';
import Layout from '../components/Layout';
import Nav from '../components/Nav';

export default function HomePage() {
  return (
    <Layout age={666} first="Lucy">
      <Nav />
      <p>Hey! I am the Home page 🏄🏼‍♀️</p>
    </Layout>

    // <>
    // <p>Hey! I am the another element and ghost element 👻</p>
    // </>
  );
}
