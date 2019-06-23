import Link from 'next/link';
import Head from '../components/head';
import Nav from '../components/nav';
import ImageHeader from '../components/imageHeader'
import Card from '../components/Card'

const title = 'Artists Fighting Isolation'

export default () => (
  <div>
    <Head title="Home" />
    <Nav />
    <ImageHeader image={'../static/mountain.jpg'} headerText={title}/>
    <div className="hero">
      <h1 className="title">Helping artists live happier lives by bringing them together</h1>
      <p className="description">Artists Fighting Isolation is dedicated to creating solutions to the unique struggles faced by artists everywhere. </p>
      <h1 className='intro'>What you'll find on our website:</h1>
    </div>
    
    <div className="row">
    <Card image={'../static/symbahome.jpg'} bodyText='test' title='test' description='test' buttonText='test'/>
          {/* <a className="card">
            <h3>Getting Started &rarr;</h3>
            <p>Learn more about Next.js on official website</p>
          </a> */}
    </div>
    

    <style jsx>{`
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
      .row {
        max-width: 587px;
        margin: 80px auto 40px;
        display: flex;
        flex-direction: row;
        justify-content: space-around;
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
