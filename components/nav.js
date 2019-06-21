import Link from 'next/link';

const links = [
  { href: 'https://github.com/themodernjavascript/create-next-app-cli', label: 'Github' },
  { href: '/join', label: 'Join!'},
  { href: '/symba', label: 'Symba'},
  { href: '/resources', label: 'Resources'},
  { href: '/our-cause', label: 'Our Cause'},
  { href: '/our-mission', label: 'Our Mission'},
  { href: '/Team', label: 'Team'},
  { href: '/Contact', label: 'Contact'}
].map(link => {
  link.key = `nav-link-${link.href}-${link.label}`
  return link
});

const Nav = () => (
  <nav>
    <ul>
      <li>
        <Link prefetch href="/">
          <a>AFI</a>
        </Link>
      </li>
      <ul>
        {links.map(
          ({ key, href, label }) => (
            <li key={key}>
              <Link href={href}>
                <a>{label}</a>
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
        background: black;
        width: 100%;
      }
      ul {
        display: flex;
        justify-content: space-between;
      }
      nav > ul {
        padding: 4px 16px;
      }
      li {
        display: flex;
        padding: 6px 8px;
      }
      a {
        color: #067df7;
        text-decoration: none;
        font-size: 13px;
      }
    `}</style>
  </nav>
);

export default Nav;
