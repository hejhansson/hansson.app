import Head from 'next/head'
import Case from '../components/case'

export default function Home() {
  return (
    <div>
      <Head>
        <title>Alexander Hansson</title>
        <link rel="icon" href="/favicon.png" />
      </Head>

      <main className="p-4 xl:p-8 italic xl:flex flex-col justify-between h-screen">
        <h1 className="text-lg xl:text-2xl max-w-2xl text-black">
          <span className="not-italic">ALEXANDER HANSSON</span> is a multi-disciplinary designer and developer based in Falkenberg, Sweden. Currently designing and developing at <a className="not-italic underline text-black hover:bg-yellow-100 hover:text-gray-900" href="https://glesys.se">GLESYS</a>. Formely at the ad agency <a className="not-italic underline text-black hover:bg-yellow-100 hover:text-gray-900" href="https://bulldozer.se">BULLDOZER</a>.
        </h1>
        <h2 className="mt-8 xl:mt-0 text-lg xl:text-xl max-w-xl leading-snug text-gray-800">
          <a className="underline text-black hover:bg-yellow-100 hover:text-gray-900" href="mailto:alexander@hansson.app">alexander@hansson.app</a>
        </h2>
      </main>
    </div>
  )
}
