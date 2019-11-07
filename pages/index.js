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
        <div className="p-4 sm:p-12">
          <Head/>
          <SiteHeader/>
          <p className="leading-normal max-w-md mb-4 pt-12 text-lg sm:text-xl">
            Bor i Falkenberg och jobbar som designer & utvecklare på <a href="https://glesys.se">GleSYS</a>.
            Pysslar främst med att vidareutveckla kontrollpanelen GleSYS Cloud. <br/>→ <a target="_blank" href="https://cloud.glesys.com/">https://cloud.glesys.com/</a>
          </p>
          <p className="leading-normal max-w-md mb-4 pt-12 text-lg sm:text-xl">
            Tidigare på kommunikationsbyrån Bulldozer där jag tog fram moderna webblösningar till nationella och internationella företag.
            Jobbat med varumärken som Brämhults, Löfbergs, Folktandvården Sverige, Byggcheferna och Hemfosa. 
          </p>
          <SiteFooter/>
        </div>
      </div>
      
    );
  }
}

export default Home;
