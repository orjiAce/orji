import React from "react";
import '../styles/globals.css'


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
