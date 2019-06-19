import React from 'react'
import Link from 'next/link'
import Head from '../components/Head'

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
        <div className="max-w-2xl p-4 sm:p-12 ">
          <Head/>
          <p className="leading-tight mb-4 text-xl sm:text-3xl">
            Utvalda projekt
          </p>

          <p className="leading-tight mb-2 mt-16 text-xl sm:text-3xl">
            Hively
          </p>
          <p className="leading-tight mb-8 text-grey-dark text-lg sm:text-xl">
            Grafisk profil, UX/UI & utveckling
          </p>

          <img src="/static/hively.jpg" />
          <img className="mt-8" src="/static/hively-dash.jpg" />

          <p className="leading-tight mb-2 mt-16 text-xl sm:text-3xl">
            Rullavagn
          </p>

          <p className="leading-tight mb-8 text-grey-dark text-lg sm:text-xl">
            Utveckling
          </p>

          <img src="/static/rulla.jpg" />
          <img className="mt-8" src="/static/rulla2.jpg" />
          <img className="mt-8" src="/static/rulla3.jpg" />

          <p className="leading-tight mb-2 mt-16 text-xl sm:text-3xl">
            typeof
          </p>

          <p className="leading-tight mb-8 text-grey-dark text-lg sm:text-xl">
            Design & utveckling
          </p>

          <img src="/static/typeof.jpg" />

          <p className="leading-tight mb-2 mt-16 text-xl sm:text-3xl">
            we/run
          </p>

          <p className="leading-tight mb-8 text-grey-dark text-lg sm:text-xl">
            Grafisk profil, UX/UI & utveckling
          </p>

          <img src="/static/werun-logo.jpg" />
          <img className="mt-8" src="/static/werun-dash.jpg" />
          <img className="mt-8" src="/static/werun-user.jpg" />
          <img  className="mt-8"src="/static/werun.jpg" />


          <div className="w-full">
            <p className="leading-tight mb-4 text-grey-dark text-lg sm:text-xl mt-16 pt-12">
              Tillbaka till <Link href="/"><a>startsidan</a></Link>
            </p>
          </div>
        </div>

      </div>
    );
  }
}

export default Projects;
