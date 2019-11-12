import App from "next/app";

function MyApp({ Component, pageProps, router: { query, pathname } }) {
  return <>
    Data available inside `_app.js`: {JSON.stringify(pageProps.staticProps || __NEXT_DATA__.props.staticProps)}
    <Component {...pageProps} />
  </>
}

// Only uncomment this method if you have blocking data requirements for
// every single page in your application. This disables the ability to
// perform automatic static optimization, causing every page in your app to
// be server-side rendered.

// Needed for access data in dynamic routing

MyApp.getInitialProps = async (appContext) => {
  // calls page's `getInitialProps` and fills `appProps.pageProps`
  const appProps = await App.getInitialProps(appContext);

  return { ...appProps }
}

export default MyApp