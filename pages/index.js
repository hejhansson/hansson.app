import React from 'react'
import Link from 'next/link'
import Head from '../components/Head'
import SiteHeader from '../components/SiteHeader'
import SiteFooter from '../components/SiteFooter'

class Home extends React.Component {
  constructor(props) {
    super(props);

    this.state = {};
  }

  componentDidMount() {
  }

  render() {
    return ( 
      <div className="w-full relative">

        <div className="max-w-xl mx-auto p-4 sm:p-12 flex justify-between flex-wrap">
          <Head/>
          <SiteHeader/>

          <p className="leading-normal mb-4 max-w-md pt-12 text-lg sm:text-xl">
            Bor i Falkenberg och jobbar för Karlstadbaserade kommunikationsbyrån Bulldozer. Tar fram moderna webblösningar till nationella och internationella företag.
          </p>
        </div>

        <div className="w-full relative bg-grey-lighter">

          <div className="max-w-xl mx-auto p-4 sm:p-12">

            <p className="leading-normal mb-0 sm:mb-6 max-w-md pt-6 text-lg sm:text-xl w-full">
              Utvalda projekt
            </p>

            <img className="mt-8" src="/static/hively.jpg" />
            <img className="mt-8" src="/static/rulla.jpg" />
            <img className="mt-8" src="/static/rulla2.jpg" />
            <img className="mt-8" src="/static/werun-logo.jpg" />
            <img className="mt-8"src="/static/werun.jpg" />

            
            <SiteFooter/>
          </div>
        </div>


      </div>
      
    );
  }
}

export default Home;
