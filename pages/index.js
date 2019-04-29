import Head from '../components/Head'

function Home() {

  return ( 
  <div className="max-w-xl p-4 sm:p-12">
    <Head/>
    <p className="leading-tight mb-4 text-md sm:text-3xl">
      Alexander Hansson<br/>
      Designer och utvecklare
    </p>

    <p className="leading-tight mb-4 text-md sm:text-3xl">
      Bor i Falkenberg och jobbar för Karlstadbaserade kommunikationsbyrån Bulldozer. Tar fram moderna webblösningar till nationella och internationella företag.
    </p>

    <p className="leading-tight mb-4 text-md sm:text-3xl">
      Om du vill nå mig kan du göra det på:<br/>
      alexander.hansson@bulldozer.se<br/>
      +46 730 66 92 60
    </p>
  </div>
  );
}

export default Home;
