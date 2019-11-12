import App from "next/app";
import Link from 'next/link'

function MyApp({ Component, pageProps, router: { query, pathname } }) {
  const { staticProps } = (typeof window !== "undefined") ? __NEXT_DATA__.props.pageProps : pageProps
  return <>
    Data available inside `_app.js`: {JSON.stringify(staticProps)}
    <Component {...pageProps} staticProps={staticProps} />
    <hr />
    Next's link:{" "}
    <Link href="/"><a>Home</a></Link>
    {` | `}<Link href="/[no]" as="/1"><a>1</a></Link>
    {` | `}<Link href="/[no]" as="/2"><a>2</a></Link>
    {` | `}<Link href="/[no]" as="/42"><a>42</a></Link>
  </>
}

// Only uncomment this method if you have blocking data requirements for
// every single page in your application. This disables the ability to
// perform automatic static optimization, causing every page in your app to
// be server-side rendered.

// MyApp.getInitialProps = async (appContext) => {
//   // calls page's `getInitialProps` and fills `appProps.pageProps`
//   const appProps = await App.getInitialProps(appContext);

//   return { ...appProps }
// }

export default MyApp