//Home Page

//The only import we need besides our own components is this for static pages, pretty cool
import Link from 'next/link';

import Head from '../components/head';
import Nav from '../components/nav';
import ImageHeader from '../components/imageHeader';
import CardLeft from '../components/CardImgLeft';
import CardRight from '../components/CardImgRight';
import Footer from "../components/footer"

//Used in the imgHeader component, passed as prop
const title = 'Artists Fighting Isolation';

export default () => (
  // A materialize/bootstrap-like grid system has been implemented. Currently only col-6 class exists as a column taking up the whole row
  // However the framework is in place to add columns of whatever size you want in the <style> tag
  <div className='grid-container'>
    <Head title="Home" />
    <Nav />
    <ImageHeader image={'../static/AFIPaintBackground.jpg'} headerText={title}/>
    <div className="hero">
      <h1 className="title">Helping artists live happier lives by bringing them together</h1>
      <p className="description">Artists Fighting Isolation is dedicated to creating solutions to the unique struggles faced by artists everywhere. </p>
      <h1 className='intro'>What you'll find on our website:</h1>
    </div>
    
    <div className='row'>
      <div className='col-6'>
        <CardLeft image={'../static/symbahome.jpg'}
        alt='Co go cleszy my dude' 
        title='Symba' 
        description='The Social Platform For Artists' 
        bodyText='In order to combat the tendency towards isolation among artists, we are building a mobile app similar in function to a dating app. Symba will provide a platform for artists to find ideal collaborators for the type of art they do. 
        It can also help them expand their network, find job opportunities, and combat loneliness with social interaction. The app is mean to create connections that start on the app, but quickly move into the real world. Finally, increased collaboration leads to increased productivity!
        Opening communication between artists would also make it easier for new and aspiring artists to seek advice, coaching, and industry knowledge. Other people who work directly with artists could use the app to hire and book talent.' 
        buttonText='Learn more'
        />   
      </div>
    </div>

    <div className='row'>
      <div className='col-6'>
        <CardRight image={'../static/resourcepage.jpg'}
        alt='motivational!'
        title='Resource Page'
        bodyText='In the meantime, to help support our members in their creative pursuits until Symba is developed and distributed, we have put together a page of currently available resources, the vast majority of which are free!
        We hope that artists who use these resources will begin to see how happiness & sustainability in the arts can be the rule, not the exception.'
        buttonText='Check out these incredible artist resources!'
        /> 
      </div>
    </div>

    <Footer />

    {/* Note the :global(body) tag. This applies the CSS here universally to every page on the site. 
        Because I copy-pasted this page it is also on the other pages which may cause problems if you want to change the body on another page.
        I recommend deleting :global(body) from every page except this. */}

    {/* As for columns you'll see that the class for any size has been generated (i.e. col-2, col-3, etc).
        All you need to do when making a new column is specify the size. col-6 is 100% width because 16.66% width times 6 is 100 */}
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
    `}</style>
  </div>
);
