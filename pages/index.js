import Head from '../components/Head'

function Home() {

  return ( 
  <div className="h-screen w-full relative">
    <div className="max-w-xl p-4 sm:p-12">
      <Head/>
      <p className="leading-tight mb-4 text-xl sm:text-3xl">
        Alexander Hansson<br/>
        Designer och utvecklare
      </p>

      <p className="leading-tight mb-4 text-xl sm:text-3xl">
        Bor i Falkenberg och jobbar för Karlstadbaserade kommunikationsbyrån Bulldozer. Tar fram moderna webblösningar till nationella och internationella företag.
      </p>

      <p className="leading-tight mb-4 text-xl sm:text-3xl">
        Om du vill nå mig kan du göra det på:<br/>
        alexander.hansson@bulldozer.se<br/>
        +46 730 66 92 60
      </p>
    </div>

    <h1>
      <span>あ</span>
      <span>な</span>
      <span>た</span>
      <span>は</span>
      <span>翻</span>
      <span>訳</span>
      <span>で</span>
      <span>翻</span>
      <span>訳</span>
      <span>し</span>
      <span>ま</span>
      <span>し</span>
      <span>た</span>
      <span>か</span>
      <span>?</span>
      
    </h1>

  </div>
  );
}

export default Home;
