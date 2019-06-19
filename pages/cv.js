import React from 'react'
import Link from 'next/link'
import Head from '../components/Head'

class CV extends React.Component {
  constructor(props) {
    super(props);

    this.state = {};
  }

  componentDidMount() {
  }

  render() {
    return ( 
      <div className="h-full w-full relative cv pb-12">
        <div className="max-w-3xl p-4 sm:p-12">
          <Head/>
          <p className="leading-tight mb-4 text-xl sm:text-3xl">
            Resumé  
          </p>

          <div className="w-full flex flex-wrap">
            <div className="w-full sm:w-1/2">
              <p className="leading-tight mb-4 mt-12 text-xl sm:text-3xl">
                Arbetslivserfarenhet  
              </p>
              <p className="leading-tight mb-4 text-xl sm:text-2xl">
                Digital Developer, Bulldozer<br></br>2014 → pågående
              </p>
              <p className="leading-tight mb-4 text-grey-dark text-lg sm:text-xl">
                Jobbar med både front-, back end, design och DevOps. Utveckling främst i WordPress, meteor.js och react.js.
                <br></br><br></br>
                Jag ser till att lära mig de nya tekniker för webben som kan göra någon nytta och underlätta för mig och min arbetsprocess. Just nu jobbar jag gärna med:
              </p>

              <ul className="leading-tight mb-4 text-grey-dark text-lg mt-4 sm:text-xl">
                  <li>CSS (SCSS/LESS/PostCSS)</li>
                  <li>JavaScript (React/Next.js/Meteor.js/Node.js/express)</li>
                  <li>PHP (WordPress/Laravel)</li>
                  <li>Databser (MongoDB/MySQL)</li>
                  <li>Build (webpack/laravel-mix/gulp)</li>
              </ul>

              <p className="leading-tight mb-4 mt-8 text-xl sm:text-2xl">
                Frilansande webbutvecklare
              <br></br>2013 → 2016
              </p>
              <p className="leading-tight mb-4 text-grey-dark text-lg sm:text-xl">
                Hjälpt mindre till mellanstora företag att designa och utveckla webbplatser, ta fram logotyper och grafiska profiler, informationsvideor, med mera. Både direkt mot kund och som underleverantör.              
              </p>

              <p className="leading-tight mb-4 mt-8 text-xl sm:text-2xl">
                Skiftledare, McDonalds
              <br></br>2008 → 2012
              </p>
              <p className="leading-tight mb-4 text-grey-dark text-lg sm:text-xl">
                Jobbade som deltid på McDonalds under mina gymnasiestudier och blev sedan skiftledare efter studenten. Hade ansvar för både restaurang och medarbetare under mina skift. Var även med vid rekrytering.              
              </p>
            </div>

            <div className="w-full sm:w-1/2 pl-0 sm:pl-16">
              <p className="leading-tight mb-4 mt-12 text-xl sm:text-3xl">
                Utbildning
              </p>

              <p className="leading-tight mb-4 text-xl sm:text-2xl">
                Karlstads Universitet, <br></br>Filosofie kandidatexamen i informatik
              <br></br>2012 → 2015
              </p>
              <p className="leading-tight mb-4 text-grey-dark text-lg sm:text-xl">
                3-årigt program där fokus låg på IT-projekt, processer, användartester, prototyping, webbprogrammering, programmering, interaktionsdesign, webbanalys, grafisk form och foto.<br></br><br></br>
                Min kandidatuppsats skrev jag om och utvärderade ramverk för att ta fram hyrbridapplikationer som webbutvecklare. Uppsatsen finns att läsa i fulltext <a target="_blank" href="http://kau.diva-portal.org/smash/get/diva2:821128/FULLTEXT01.pdf">här</a>.
              </p>

              <p className="leading-tight mb-4 text-xl sm:text-2xl">
                Falkenbergs gymnasieskola,<br></br> samhäll inriktning språk
              <br></br>2007 → 2010
              </p>
              <p className="leading-tight mb-4 text-grey-dark text-lg sm:text-xl">
                Läste samhällsprogrammet med inriktning språk. Det var precis som det låter — mycket språk. Tyvärr inga programmeringsspråk.
              </p>
              
            </div>

            <div className="w-full">
              <p className="leading-tight mb-4 text-grey-dark text-lg sm:text-xl mt-16 pt-12">
                Tillbaka till <Link href="/"><a>startsidan</a></Link>
              </p>
            </div>
          </div>



          
        </div>
      </div>
    );
  }
}

export default CV;
