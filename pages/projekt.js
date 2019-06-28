import React from 'react'
import Link from 'next/link'
import Head from '../components/Head'
import SiteHeader from '../components/SiteHeader'
import SiteFooter from '../components/SiteFooter'

class Projects extends React.Component {
  constructor(props) {
    super(props);

    this.state = {};
  }

  componentDidMount() {
  }

  render() {
    return ( 
      <div className="w-full bg-grey-lightest relative sm:flex flex-wrap">
        <div className="max-w-xl mx-auto p-4 sm:p-12">
          <Head/>
          <SiteHeader/>

          <p className="leading-tight mb-2 mt-16 pt-16 text-lg sm:text-xl">
            Hively
          </p>
          <p className="leading-tight mb-8 text-grey-dark text-lg sm:text-xl">
            Grafisk profil, UX/UI & utveckling
          </p>

          <img src="/static/hively.jpg" />

          <p className="leading-tight mb-2 mt-16 text-lg sm:text-xl">
            Rullavagn
          </p>

          <p className="leading-tight mb-8 text-grey-dark text-lg sm:text-xl">
            Utveckling
          </p>

          <img src="/static/rulla.jpg" />
          <img className="mt-8" src="/static/rulla2.jpg" />
          <img className="mt-8" src="/static/rulla3.jpg" />

          <p className="leading-tight mb-2 mt-16 text-lg sm:text-xl">
            we/run
          </p>

          <p className="leading-tight mb-8 text-grey-dark text-lg sm:text-xl">
            Grafisk profil, UX/UI & utveckling
          </p>

          <img src="/static/werun-logo.jpg" />
          <img className="mt-8" src="/static/werun-dash.jpg" />
          <img className="mt-8" src="/static/werun-user.jpg" />
          <img className="mt-8"src="/static/werun.jpg" />

          <p className="leading-tight mt-12 mb-8 text-grey-dark text-lg sm:text-xl">
            Projekten ovan är från tiden jag frilansade, senare referenser fås på begäran. 
          </p>

          <SiteFooter/>

        </div>
      </div>
    );
  }
}

export default Projects;
