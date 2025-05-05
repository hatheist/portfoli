import Head from 'next/head'

export type metaData = {
    title: string
    description?: string
    keywords?: string
    url?: string
}
export type metaHeadProps = {
    meta: metaData
}

// Utility component to set the meta tags for a page
export default function MetaHead(props: metaHeadProps) {
    const defaultImage = '/images/icon.png'; // Fallback image path
    return <Head>
        <title>{props.meta.title}</title>
        {props.meta.description && <meta name="description" content={props.meta.description}/>}
        {props.meta.keywords && <meta name="keywords" content={props.meta.keywords}/>}
        {props.meta.url && <link rel="canonical" href={process.env.SITE_URL + props.meta.url}/>}
        
        {/* Open Graph metadata */}
        <meta property="og:title" content={props.meta.title} />
        {props.meta.description && <meta property="og:description" content={props.meta.description} />}
        {props.meta.url && <meta property="og:image" content={process.env.SITE_URL + '/open-graph' + (props.meta.url == '/' ? '/index' : props.meta.url) + '.png'} />}
        <meta property="og:image:alt" content={props.meta.title}/>
        <meta property="og:image:type" content="image/png"/>
        <meta property="og:image:width" content="1200"/>
        <meta property="og:image:height" content="630"/>
        <meta property="og:type" content="website" />
        {props.meta.url && <meta property="og:url" content={process.env.SITE_URL + props.meta.url} />}
        
        {/* Twitter Card metadata */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={props.meta.title} />
        {props.meta.description && <meta name="twitter:description" content={props.meta.description} />}
        {props.meta.url && <meta name="twitter:image" content={process.env.SITE_URL + '/open-graph' + (props.meta.url == '/' ? '/index' : props.meta.url) + '.png'} />}
    </Head>
}