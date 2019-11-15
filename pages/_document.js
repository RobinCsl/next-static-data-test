import * as React from "react"
import Document, { Html, Head, Main, NextScript } from "next/document"

export default class KiwiDocument extends Document {
  static async getInitialProps(ctx) {
    // You can read static data from filesystem for example
    const staticProps = {
      now: Date.now(),
      languages: {
        fr: require("../data/fr.json"),
        en: require("../data/en.json"),
      }
    }

    const originalRenderPage = ctx.renderPage

    ctx.renderPage = () =>
      originalRenderPage({
        // useful for wrapping the whole react tree
        enhanceApp: App => props => {
          props.pageProps.staticProps = staticProps
          return <App staticProps={staticProps} {...props}  />
        },
      })

    // Run the parent `getInitialProps` using `ctx` that now includes our custom `renderPage`
    const initialProps = await Document.getInitialProps(ctx)

    return { ...initialProps, staticProps }
  }

  render() {
    return (
      <Html>
        <Head />
        <body>
          <Main />
          <hr />
          {/* Data available on document level: {JSON.stringify(this.props.staticProps)} */}
          <NextScript />
        </body>
      </Html>
    )
  }
}
