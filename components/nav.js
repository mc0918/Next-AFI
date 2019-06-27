import Link from 'next/link';
import React from 'react'

const links = [
  { href: '/join', label: 'Join!'},
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

//-------------------------------------------------------------
class Nav extends React.Component{
  constructor(props){
    super(props)
    this.state = {};
    this.handleScroll = this.handleScroll.bind(this)
  }

  handleScroll(){
    this.setState({scroll: window.scrollY})
  }

  componentDidMount(){
    const el = document.querySelector('nav');
    this.setState({top: el.offsetTop, height: el.offsetHeight});
    window.addEventListener('scroll', this.handleScroll)
  }

  componentDidUpdate(){
    this.state.scroll > this.state.top ? document.body.style.paddingTop = `0px` :
    document.body.style.paddingTop = 0;
  }
  render() {
    return (
      <nav className={this.state.scroll > this.state.top ? "fixed-nav" : ""}>
        <ul>
        <li>
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
      :global(body) {
        margin: 0;
        font-family: -apple-system,BlinkMacSystemFont,Avenir Next,Avenir,Helvetica,sans-serif;
      }
      nav {
        text-align: center;
        position: fixed;
        background: #00dfcf;
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
        color: #067df7;
        text-decoration: none;
        font-size: 13px;
      }
      .link {
        color: black;
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
//-------------------------------------------------------------


// const Nav = () => (
//   <nav>
//     <ul>
//       <li>
//         <Link prefetch href="/">
//           <a className="link afi">AFI</a>
//         </Link>
//       </li>
//       <ul>
//         {links.map(
//           ({ key, href, label }) => (
//             <li key={key}>
//               <Link href={href}>
//                 <a className="link">{label}</a>
//               </Link>
//             </li>
//           )
//         )}
//       </ul>
//     </ul>

//     <style jsx>{`
//       :global(body) {
//         margin: 0;
//         font-family: -apple-system,BlinkMacSystemFont,Avenir Next,Avenir,Helvetica,sans-serif;
//       }
//       nav {
//         text-align: center;
//         position: fixed;
//         background: #00dfcf;
//         width: 100%;
//       }
//       ul {
//         display: flex;
//         justify-content: space-between;
//       }
//       nav > ul {
//         padding: 4px 16px;
//       }
//       li {
//         display: flex;
//         padding: 6px 8px;
//       }
//       a {
//         color: #067df7;
//         text-decoration: none;
//         font-size: 13px;
//       }
//       .link {
//         color: black;
//         font-weight: bold;
//         font-size: 15px;
//       }
//       .afi {
//         font-size: 20px;
//       }
//     `}</style>
//   </nav>
// );

// export default Nav;
