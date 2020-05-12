import Head from '../components/Head'
import SiteHeader from '../components/SiteHeader'
import SiteFooter from '../components/SiteFooter'

export default () => (
  <div className="w-full relative">
    <div className="p-4 sm:p-12">
      <Head/>
      <SiteHeader/>
      <p className="leading-normal max-w-xl mb-4 pt-8 text-lg sm:text-2xl lg:text-3xl">
        Bor i Falkenberg och jobbar som designer & utvecklare på <a target="_blank" className="border-b" href="https://glesys.se">GleSYS</a>.
        <br/>Pysslar främst med att vidareutveckla kontrollpanelen GleSYS Cloud. <br/>→ <a target="_blank" className="border-b" href="https://cloud.glesys.com/">https://cloud.glesys.com/</a>
      </p>
      <p className="leading-normal max-w-xl mb-4 pt-4 text-lg sm:text-2xl lg:text-3xl">
        Tidigare på kommunikationsbyrån Bulldozer där jag tog fram moderna webblösningar till nationella och internationella företag.
        Jobbat med varumärken som Brämhults, Löfbergs, Folktandvården Sverige, Byggcheferna och Hemfosa. 
      </p>
      <SiteFooter/>
    </div>
  </div>
)