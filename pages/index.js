import React, { useState } from 'react';
import Head from 'next/head'
import Counter from "../components/counter"

const Home = (props) => (
  <div>
    <Head>
      <title>Home</title>
      <link rel='icon' href='/favicon.ico' />
    </Head>

    <pre>
      {JSON.stringify(props.staticProps)}
    </pre>

    <Counter />
  </div>
)

export default Home
