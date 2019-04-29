import React from 'react'
import NextHead from 'next/head'

export default () => (
  <NextHead>
    <title>Alexander Hansson — designer och webbutvecklare från Falkenberg</title>
    <meta name="viewport" content="initial-scale=1.0, width=device-width" />
    <link href="https://cdn.jsdelivr.net/npm/tailwindcss/dist/tailwind.min.css" rel="stylesheet"/>
    <link href="/static/css/styles.css" rel="stylesheet"/>
    <link rel="icon" type="image/png" href="/static/favicon.png"/>

    <meta property="og:url" content="https://kennetsplat.se" />
    <meta property="og:image" content="/static/kennets-2.jpg" />
    <meta property="og:description" content="Kennets plåt är din lokala plåtslagare i Falkenberg. Företaget startades av Kennet Larsson 1983 och togs över av Björn Benjaminsson 2010 och har fortsatt att drivas i samma anda där målsättningen är ett väl utfört arbete och med det nöjda kunder." />
    <meta name="description" content="Kennets plåt är din lokala plåtslagare i Falkenberg. Företaget startades av Kennet Larsson 1983 och togs över av Björn Benjaminsson 2010 och har fortsatt att drivas i samma anda där målsättningen är ett väl utfört arbete och med det nöjda kunder."/>
    
  </NextHead>
)
