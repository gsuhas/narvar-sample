import Head from 'next/head'

export default ({ title, children }) => (
    <main>
        <Head>
            <title>{title}</title>
            <meta name="viewport" content="initial-scale=1.0, width=device-width" />
            <link rel="stylesheet" href="/static/bootstrap.min.css"/>
            <link rel="stylesheet" href="/static/base.css" />
            <link rel="stylesheet" type="text/css" href="/static/fonts/fonts.min.css" />
            <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.4.1/css/all.css" integrity="sha384-5sAR7xN1Nv6T6+dT2mhtzEpVJvfS3NScPQTrOxhwjIuvcA67KV2R5Jz6kr4abQsz" crossorigin="anonymous"></link>
        </Head>
        <div className="container-fluid">
            {children}
        </div>
    </main>
)