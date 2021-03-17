import Head from 'next/head'
import Case from '../components/case'

export default function Home() {
  return (
    <div>
      <Head>
        <title>Alexander Hansson</title>
        <link rel="icon" href="/favicon.png" />
      </Head>

      <main className="p-4 xl:p-8 italic bg-white">
        <h1 className="text-lg xl:text-2xl max-w-2xl text-black">
          <span className="not-italic">ALEXANDER HANSSON</span> is a multi-disciplinary designer and developer based in Falkenberg, Sweden. Currently designing and developing at <a className="not-italic underline text-black hover:bg-yellow-100 hover:text-gray-900" href="https://glesys.se">GLESYS</a>. Formely at the ad agency <a className="not-italic underline text-black hover:bg-yellow-100 hover:text-gray-900" href="https://bulldozer.se">BULLDOZER</a>.
        </h1>

        <div className="mt-28 max-w-8xl mx-auto grid grid-cols-1 xl:grid-cols-2 gap-12">
          <Case text="Logotype for KRAV-certified flower grower." size="h-40" imagePath="/vaxtlunda.svg" background="#F1FAF5"/>
          <Case text="Logotype and profile for farm engaged in KRAV-certified vegetable cultivation." size="h-28" imagePath="/kilagard.svg" background="#F8F7F1"/>
          <Case text="Logotype for Falkenberg based hair dresser." size="h-36" imagePath="/harizont.png" background="#EEEEEC"/>
          <Case text="Logotype and profile for Swedish company that makes hand crafted jewelry." size="h-48" imagePath="/flora@2x.png" background="#F8F4F1"/>
        </div>

        <h2 className="text-lg xl:text-xl max-w-xl leading-snug text-gray-800 pt-12 mt-16">
          <a className="underline text-black hover:bg-yellow-100 hover:text-gray-900" href="mailto:alexander@hansson.app">alexander@hansson.app</a>
        </h2>
      </main>
    </div>
  )
}
