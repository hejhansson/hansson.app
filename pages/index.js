import React from 'react'
import Link from 'next/link'
import Head from '../components/Head'

class Home extends React.Component {
  constructor(props) {
    super(props);

    this.state = {};
  }

  componentDidMount() {
  }

  render() {
    return ( 
      <div className="h-screen w-full relative sm:flex flex-col-reverse justify-between">
        <div className="hidden sm:block">
          <p className="leading-tight mb-4 text-xl p-4 sm:p-12 sm:text-3xl">
            Läs mitt CV <Link href="/cv"><a>här</a></Link>
          </p>
        </div>

        <div className="max-w-xl p-4 sm:p-12 ">
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
            alexander@hnssn.se<br/>
            +46 730 66 92 60
          </p>
        </div>

        <div className="sm:hidden">
          <p className="leading-tight mb-4 text-xl p-4 sm:p-12 sm:text-3xl">
            Läs mitt CV <Link href="/cv"><a>här</a></Link>
          </p>
        </div>
      </div>
    );
  }
}

export default Home;
