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
        <img src="../static/SymbaHomeScreen.jpg" />
      </div>
    </div>

    <h2>Filter</h2>
    <p className='description'>
        First, you tell us what kind of artist you're looking for.
    </p>

    <div className='row'>
      <div className='col-6'>
        <img src="../static/SymbaFilterScreen.jpg" />
      </div>
    </div>

    <h2>Swipe</h2>
    <p className='description'>
        Then, you can swipe through artists, check out their profile...
    </p>

    <div className='row'>
      <div className='col-6'>
        <img src="../static/SymbaSwipeScreen.jpg" />
      </div>
    </div>

    <h2>Browse</h2>
    <p className='description'>
        ...and browse through their portfolios and past work!
    </p>

    <div className='row'>
      <div className='col-6'>
        <img src="../static/SymbaBrowseScreen.jpg" />
      </div>
    </div>

    <h2>Say hello!</h2>
    <p className='description'>
        Finally, if you’re interested in meeting them, you can go ahead and introduce yourself by sending them a message.  
    </p>
    <p className='description'>
        Symba can also be used by startups and nonprofits to connect with creatives and visa versa. 
    </p>

    <h1>
        Innovation Model
    </h1>

    <p className='description'>
        <b>Need Statement</b>
    </p>

    <p className='description'>
        <b>Isolation </b>
        is more prominent among artists than non-artists and so are debilitating mental health disorders like depression and anxiety. 
        Artists also have difficulty finding financial security and career fulfillment, because of the lack of job opportunities in the arts. 
        Most artists find new opportunities through personal connections, so isolation can lead to even less job opportunities and an even higher rate of depression. 
        These factors lead to a shocking statistic:
    </p>

    <p className='description'>
        <i>
            Artists have a 125% higher likelihood of suicide.
        </i>
    </p>

    <p className='description'>
        <b>Market Opportunity</b>
    </p>

    <p className='description'>
        Artists aren't able to easily and affordably meet new friends, collaborators, and valuable career connections. 
        However, platforms like Facebook, LinkedIn, and Tinder have been successful at implementing intuitive and user friendly interfaces, design flows, and business models to help their users accomplish similar tasks, albeit for totally different audiences and markets.
    </p>

    <p className='description'>
        <b>Value Proposition</b>
    </p>

    <p className='description'>
        Symba is a new way for artists to make the types of connections they want with people they can relate to, whether it be for socializing, networking, or collaboration.
        <br />
        <small>
        (When we say artists, we mean all creators, performers, designers, and anyone working in the arts.)
        </small>
        <br />
        What we are doing is creating an app with a user experience that takes inspiration from other familiar services like Facebook, LinkedIn, and Tinder. 
        By doing this we can offer artists a solution to their problem that makes sense and feels natural. 
        Whenever we test our mock-ups with artists, their first reaction is that this app should've been on the market years ago. 
        We completely agree!
    </p>

    <p className='description'>
        <b>Measurable Impact</b>
    </p>

    <p className='description'>
        By using Symba to meet
        <b>
        new friends, collaborators, and valuable career connections, 
        </b>
        artists will increase their overall quality of life, because they will avoid isolating themselves. 
        We believe that by re-implementing these already successful models to solve this unique problem we can make the desired impact and maybe even decrease the alarming rate of suicide in this struggling community.
    </p>

    <h1>AFI on Facebook</h1>

    <p className='description'>
    Until we launch the app, the best way to connect with our members is by joining the Artists Fighting Isolation facebook group. 
    Please support our beautiful community! 
    Click
    <span> </span>  
    <Link prefetch href='https://www.facebook.com/groups/artistsfightingisolation/'>
         <a target='_blank'>
            here
        </a>
    </Link> to join!
    </p>


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
      h2, h1 {
          text-align: center;
      }
    `}</style>
  </div>
);
