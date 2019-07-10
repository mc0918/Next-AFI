import Link from 'next/link';

import Head from '../components/head';
import Nav from '../components/nav';
import ImageHeader from '../components/imageHeader';
import CardLeft from '../components/CardImgLeft';
import CardRight from '../components/CardImgRight';
import Footer from "../components/footer"

const title = 'The Symba App';

export default () => (
  <div className='grid-container'>
    <Head title="Home" />
    <Nav />
    <ImageHeader image={'../static/AFIPaintBackground.jpg'} headerText={title}/>
    <div className="hero">
      <p className="description">
          Despite the existence of other social networking platforms like Facebook or online job boards like Craigslist, artists still struggle when it comes to finding opportunities to meet artists. 
          It’s an even bigger frustration for artists who are out of school. 
      </p>
      <p className='description'>
          What makes Symba unique is our focus on the importance of compatibility in successful collaborative relationships. 
          A social platform for artists should allow them to promote themselves and connect with artists that are like minded, dependable, and fun to work with and Symba will do just that. 
      </p>
      <h1 className='intro'>Symba is just like a dating app but for collaboration.</h1>
      <p className='description'>
          Let’s say you’re a musician who just moved out to the Twin Cities and you want to start getting into the local music scene. 
          You would go to bars, backyard shows, but how would you know where to start when you still don’t know anyone there? 
      </p>
      <p className='description'>
          So, you download Symba!
      </p>
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
