import { useRouter } from 'next/router'

// https://github.com/zeit/next.js/#automatic-static-optimization
// If getInitialProps is absent, Next.js will statically optimize your page automatically by prerendering it to static HTML.
// During prerendering, the router's query object will be empty since we do not have query information to provide during this phase.
// Any query values will be populated client side after hydration.

const CounterPage = (props) => {
  const { staticProps } = (typeof window !== "undefined") ? __NEXT_DATA__.props.pageProps : props

  const {query: { lang }} = useRouter()

  return (<div>
    <h2>{lang}</h2>
    <pre>
      data in [lang] page: {JSON.stringify(staticProps.languages[lang])}
    </pre>
    {lang}
  </div>
  )
}

export default CounterPage
