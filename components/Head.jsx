import React from 'react'
import NextHead from 'next/head'

export default () => (
  <NextHead>
    <title>Alexander Hansson — designer och webbutvecklare från Falkenberg</title>
    <meta name="viewport" content="initial-scale=1.0, width=device-width" />
    <link href="https://unpkg.com/tailwindcss@0.7.4/dist/tailwind.min.css" rel="stylesheet"/>
    <link href="/static/css/styles.css" rel="stylesheet"/>
    <link rel="icon" type="image/png" href="/static/favicon.png"/>

    <meta name="description" content="Designer och webbutvecklare som bor i Falkenberg och jobbar för Karlstadbaserade kommunikationsbyrån Bulldozer. Tar fram moderna webblösningar till nationella och internationella företag."/>
    
  </NextHead>
)
