import Link from 'next/link';
import Head from '../components/head';
import Nav from '../components/nav';
import ImageHeader from '../components/imageHeader';
import CardLeft from '../components/CardImgLeft';
import CardRight from '../components/CardImgRight';

const title = 'Artists Fighting Isolation';

export default () => (
  <div className='grid-container'>
    <Head title="Home" />
    <Nav />
    <ImageHeader image={'../static/mountain.jpg'} headerText={title}/>
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
    <CardRight image={'../static/resourcepage.jpg'}
    alt='motivational!'
    title='Resource Page'
    bodyText='In the meantime, to help support our members in their creative pursuits until Symba is developed and distributed, we have put together a page of currently available resources, the vast majority of which are free!
    We hope that artists who use these resources will begin to see how happiness & sustainability in the arts can be the rule, not the exception.'
    buttonText='Check out these incredible artist resources!'
    /> 
    </div>

    <style jsx>{`
      .grid-container {
        width: 100%;
        box-sizing: border-box;
      }
      .row:before,
      .row:after {
        content:"";
        display: table;
        clear:both;
        margin: 80px auto 40px;
        justify-content: space-around;
      }
      [class*='col-']{
        float: left;
        min-height: 1px;
        width: 16.66%;
        padding: 12px;
      }
      .col-6{
        width: 100%
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
      
      .card {
        padding: 18px 18px 24px;
        width: 220px;
        text-align: left;
        text-decoration: none;
        color: #434343;
        border: 1px solid #9B9B9B;
      }
      .card:hover {
        border-color: #067df7;
      }
      .card h3 {
        margin: 0;
        color: #067df7;
        font-size: 18px;
      }
      .card p {
        margin: 0;
        padding: 12px 0 0;
        font-size: 13px;
        color: #333;
      }
    `}</style>
  </div>
);