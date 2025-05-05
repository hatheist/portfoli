import * as React from 'react'
import Document, {DocumentContext, DocumentProps, Head, Html, Main, NextScript,} from 'next/document'
import createEmotionServer from '@emotion/server/create-instance'
import {AppType} from 'next/app'
import createEmotionCache from '@/themes/createEmotionCache'
import {MyAppProps} from './_app'
import {darkTheme} from '@/themes/DarkTheme'

interface MyDocumentProps extends DocumentProps {
    emotionStyleTags: JSX.Element[];
}

// Most of this is boilerplate to ensure tht mui / emotion work with next.js
export default function MyDocument({emotionStyleTags}: MyDocumentProps) {
    return (
        <Html lang="en">
            <Head>
                {/* PWA primary color */}
                <meta name="theme-color" content={darkTheme.palette.primary.main}/>
                <link rel="shortcut icon" href="/images/icon.png"/>
                <meta name="emotion-insertion-point" content=""/>
                
                {/* CSP Meta Tag for external embeds */}
                <meta
                    httpEquiv="Content-Security-Policy"
                    content="default-src 'self'; script-src 'self' 'unsafe-inline' 'unsafe-eval' https://www.instagram.com https://www.youtube.com https://w.soundcloud.com https://e.issuu.com https://www.canva.com https://drive.google.com; frame-src https://www.youtube.com https://w.soundcloud.com https://drive.google.com https://www.canva.com https://e.issuu.com https://www.instagram.com; img-src 'self' https: data:; style-src 'self' 'unsafe-inline' https://fonts.googleapis.com; font-src 'self' https://fonts.gstatic.com; connect-src 'self'; object-src 'none'; media-src 'self' https://drive.google.com;"
                />
                
                {/* Additional security headers as meta tags */}
                <meta httpEquiv="X-DNS-Prefetch-Control" content="on" />
                <meta httpEquiv="X-XSS-Protection" content="1; mode=block" />
                <meta httpEquiv="X-Content-Type-Options" content="nosniff" />
                <meta httpEquiv="Referrer-Policy" content="strict-origin-when-cross-origin" />
                <meta httpEquiv="Permissions-Policy" content="camera=(), microphone=(), geolocation=(), interest-cohort=()" />
                
                {emotionStyleTags}
            </Head>
            <body>
            <Main/>
            <NextScript/>
            </body>
        </Html>
    )
}

// `getInitialProps` belongs to `_document` (instead of `_app`),
// it's compatible with static-site generation (SSG).
MyDocument.getInitialProps = async (ctx: DocumentContext) => {
    // Resolution order
    //
    // On the server:
    // 1. app.getInitialProps
    // 2. page.getInitialProps
    // 3. document.getInitialProps
    // 4. app.render
    // 5. page.render
    // 6. document.render
    //
    // On the server with error:
    // 1. document.getInitialProps
    // 2. app.render
    // 3. page.render
    // 4. document.render
    //
    // On the client
    // 1. app.getInitialProps
    // 2. page.getInitialProps
    // 3. app.render
    // 4. page.render

    const originalRenderPage = ctx.renderPage

    // You can consider sharing the same Emotion cache between all the SSR requests to speed up performance.
    // However, be aware that it can have global side effects.
    const cache = createEmotionCache()
    const {extractCriticalToChunks} = createEmotionServer(cache)

    ctx.renderPage = () =>
        originalRenderPage({
            enhanceApp: (App: React.ComponentType<React.ComponentProps<AppType> & MyAppProps>) =>
                function EnhanceApp(props) {
                    return <App emotionCache={cache} {...props} />
                },
        })

    const initialProps = await Document.getInitialProps(ctx)
    // This is important. It prevents Emotion to render invalid HTML.
    // See https://github.com/mui/material-ui/issues/26561#issuecomment-855286153
    const emotionStyles = extractCriticalToChunks(initialProps.html)
    const emotionStyleTags = emotionStyles.styles.map((style) => (
        <style
            data-emotion={`${style.key} ${style.ids.join(' ')}`}
            key={style.key}
            // eslint-disable-next-line react/no-danger
            dangerouslySetInnerHTML={{__html: style.css}}
        />
    ))

    return {
        ...initialProps,
        emotionStyleTags,
    }
}