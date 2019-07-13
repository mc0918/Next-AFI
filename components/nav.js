//A sticky navbar component that stays on top of the screen as you scroll down

import Link from 'next/link';
import React from 'react'

//An array of objects mapped to link variable. Allows Next to generate urls without server-side code. Label is what appears as hyperlink text.
const links = [
  { href: 'https://www.facebook.com/groups/artistsfightingisolation/', label: 'Join!'},
  { href: '/symba', label: 'Symba'},
  { href: '/resources', label: 'Resources'},
  { href: '/our-cause', label: 'Our Cause'},
  { href: '/our-mission', label: 'Our Mission'},
  { href: '/team', label: 'Team'},
  { href: '/contact', label: 'Contact'}
].map(link => {
  link.key = `nav-link-${link.href}-${link.label}`
  return link
});

// A constructor is necessary for this component to work as a sticky header
// I also set this component's z-index to 1, which might make the constructor and its functions unnecessary 
class Nav extends React.Component{
  constructor(props){
    super(props)
    this.state = {};
    this.handleScroll = this.handleScroll.bind(this)
  }

  //Sets scroll variable equal to the value of the top of the viewport or 0 if at the top of the page
  handleScroll(){
    this.setState({scroll: window.scrollY})
  }

  //Gives this nav component two states equal to the position in pixels away from the top of the page (offsetTop) and from the parent element (offsetHeight)
  componentDidMount(){
    const el = document.querySelector('nav');
    this.setState({top: el.offsetTop, height: el.offsetHeight});
    window.addEventListener('scroll', this.handleScroll)
  }

  //Adds padding if page has been scrolled... Not currently in use thanks to z-index
  componentDidUpdate(){
    this.state.scroll > this.state.top ? document.body.style.paddingTop = `0px` :
    document.body.style.paddingTop = 0;
  }
  render() {
    return (
      <nav className={this.state.scroll > this.state.top ? "fixed-nav" : ""}>
        <ul>
        <li>
         {/* prefetch allows faster loading */}
         <Link prefetch href="/">
           <img className="logo" src="../static/AFI-Flat-Logo-Color.png"/>
         </Link>
         <Link prefetch href="/">
           <a className="link afi">AFI</a>
         </Link>
       </li>
       <ul>
         {links.map(
          ({ key, href, label }) => (
            <li key={key}>
              <Link href={href}>
                <a className="link">{label}</a>
              </Link>
            </li>
          )
        )}
      </ul>
    </ul>

    <style jsx>{`
      nav {
        text-align: center;
        position: fixed;
        background: #1B1B1B;
        width: 100%;
        z-index: 1;
      }
      ul {
        display: flex;
        justify-content: space-between;
      }
      nav > ul {
        padding: 0px 16px;
      }
      li {
        display: flex;
        padding: 0px 8px;
      }
      a {
        color: #1B1B1B;
        text-decoration: none;
        font-size: 13px;
      }
      .logo{
        max-height: 28px; 
        max-width: 113px;
        padding-right: 8px;
      }
      .link {
        color: white;
        font-weight: bold;
        font-size: 15px;
      }
      .afi {
        font-size: 20px;
      }
    `}</style>
      </nav>
    );
  }
}

export default Nav
