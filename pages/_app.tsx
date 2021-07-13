import '../styles/globals.css'
import React from "react";

function MyApp({ Component, pageProps }) {
  return (
      <>

          <title>
              Orji
          </title>

      <Component {...pageProps} />

      </>)
}

export default MyApp
