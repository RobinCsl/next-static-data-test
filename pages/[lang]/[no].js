import { useRouter } from 'next/router'
import Counter from "../../components/counter"

// https://github.com/zeit/next.js/#automatic-static-optimization
// If getInitialProps is absent, Next.js will statically optimize your page automatically by prerendering it to static HTML.
// During prerendering, the router's query object will be empty since we do not have query information to provide during this phase.
// Any query values will be populated client side after hydration.

const CounterPage = (props) => {
  const { staticProps } = (typeof window !== "undefined") ? __NEXT_DATA__.props.pageProps : props

  const {query: { no, lang }} = useRouter()

  return (<div>
    <h2>{no}</h2>
    {/* <h1>{staticProps.languages[lang].hello}</h1> */}
    <h1>{(staticProps.languages[lang] && staticProps.languages[lang]["smartfaq.single_booking_page.show_more_trips"]) || "N/A"}</h1>
    <h1>{JSON.stringify(staticProps.languages[lang])}</h1>
    {no && <Counter init={Number(no)} />}
  </div>
  )
}

export default CounterPage
