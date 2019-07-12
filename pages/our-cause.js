import Link from 'next/link';

import Head from '../components/head';
import Nav from '../components/nav';
import ImageHeader from '../components/imageHeader';
import CardLeft from '../components/CardImgLeft';
import CardRight from '../components/CardImgRight';
import Footer from "../components/footer"

const title = 'Why we Do It';

export default () => (
  <div className='grid-container'>
    <Head title="Home" />
    <Nav />
    <ImageHeader image={'../static/AFIPaintBackground.jpg'} headerText={title}/>
    <div className="hero">
      <p className="description">
        “We are at an important evolutionary moment, a millennial moment, in which the value we ascribe to artists and the roles they play in our communities needs significant recalibration, as do the ways we train artists and support their work."
      <br />
      <br />
        — Samuel Hoi, Maryland Institute College of Art
      </p>
    </div>
    
    <div className='row'>
      <div className='col-6'>
        <CardLeft image={'../static/OurCauseStarvingArtist.jpg'}
        imgHeight='388px'
        imgWidth='472px'
        alt='woman painting' 
        title='The Starving Artist' 
        description='Think for a second. Do you know anyone that fits this stereotype?' 
        bodyText='The trope of the starving artist is one we all know, because of how it’s been taught to us by our media, our history, our society, and our schools, 
        but what you might not realize is that this cliche is a serious problem that affects more people than you might think. ' 
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
