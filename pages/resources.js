import Link from 'next/link';
import Head from '../components/head';
import Nav from '../components/nav';
import ImageHeader from '../components/imageHeader';
import CardLeft from '../components/CardImgLeft';
import CardRight from '../components/CardImgRight';

const title = 'Resources';
const header = 'Careers in the Arts'
const links = [
{href: 'https://www.arts.gov/', label: 'NEA'},
{href: 'https://www.selfemploymentinthearts.com/', label: 'SEA'},
{href: 'https://chicagoartistscoalition.org/', label: 'CAC'},
{href: 'https://www.cciarts.org/', label: 'CCI Arts'},
{href: 'https://springboardforthearts.org/', label: 'Springboard For the Arts'}
].map(link => {
  link.key = `nav-link-${link.href}-${link.label}`
  return link
});


export default () => (
  <div className='grid-container'>
    <Head title="Resources" />
    <Nav />
    <ImageHeader image={'../static/AFIPaintBackground.jpg'} headerText={title}/>
    <div className="hero">
      <h1 className="title">{header}</h1>
    </div>
    
    <div className='row'>
      <ul>
         {links.map(
          ({ key, href, label }) => (
            <ul key={key}>
              <h2>{label}</h2>
              <Link href={href}>
                <a className="link">{href}</a>
              </Link>
            </ul>
          )
        )}
      </ul>
    </div>

    <style jsx>{`
      :global(body) {
        margin: 0;
        font-family: -apple-system,BlinkMacSystemFont,Avenir Next,Avenir,Helvetica,sans-serif;
        width: 100%;
      }
      .grid-container {
        width: 100%;
        box-sizing: border-box;
      }
      .row:before,
      .row:after {
        text-align: center;
        content:"";
        display: table;
        clear:both;
        margin: 0;
        justify-content: space-around;
      }
      [class*='col-']{
        float: left;
        min-height: 1px;
        width: 16.66%;
        padding-top: 12px;
        padding-bottom: 12px;
      }
      .col-6{
        width: 100%;
      }

      .hero {
        width: 100%;
        color: #333;
      }
      .title {
        margin: 0;
        width: 100%;
        padding-top: 40px;
        padding-bottom: 12px;
        line-height: 1.15;
        font-size: 37px;
      }
      .description {
        font-size: 18px;
        padding-bottom: 12px;
      }
      .title, .description {
        text-align: center;
      }
      .intro {
        text-align: center;
      }
      .link {

      }
    `}</style>
  </div>
);
