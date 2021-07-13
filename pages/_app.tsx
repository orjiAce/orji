import '../styles/globals.css'
import React from "react";
import {Head, Html, Main, NextScript} from "next/document";

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
