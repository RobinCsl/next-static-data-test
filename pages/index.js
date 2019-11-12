import React, { useState } from 'react';
import Head from 'next/head'
import Counter from "../components/counter"

const Home = (props) => {
  const { staticProps } = (typeof window !== "undefined") ? __NEXT_DATA__.props.pageProps : props
  return (<div>
    <Head>
      <title>Home</title>
      <link rel='icon' href='/favicon.ico' />
    </Head>

    <h1>Home</h1>
    <pre>
      data in page: {JSON.stringify(staticProps)}
    </pre>

    <Counter />
  </div>
)}

export default Home
