import Document, { Html, Head, Main, NextScript } from 'next/document'
import React from "react";


class MyDocument extends Document {
    static async getInitialProps(ctx) {
        const initialProps = await Document.getInitialProps(ctx)
        return { ...initialProps }
    }

    render() {
        return (
            <Html lang='en'>
                <Head>

                    <script src="//code.tidio.co/bzdmmqqkzig9t1kk17s3fq3ydjj38sc0.js" async></script>
                </Head>
                <body>
                <Main />
                <NextScript />
                </body>
            </Html>
        )
    }
}

export default MyDocument