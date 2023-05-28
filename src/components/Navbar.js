import { socialLink } from '../data';
import logo from '../images/logo.svg';
import PageLink from './PageLink';

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="nav-center">
        <div className="nav-header">
          <img src={logo} className="nav-logo" alt="backroads" />
          <button type="button" className="nav-toggle" id="nav-toggle">
            <i className="fas fa-bars"></i>
          </button>
        </div>

        {/* <!-- left this comment on purpose --> */}
        <PageLink classPos1="nav-links" classPos2="nav-link" />

        <ul className="nav-icons">
          {socialLink.map((link) => {
            const { id, href, target, icon } = link;
            return (
              <li key={id}>
                <a
                  href={href}
                  target={target}
                  className="nav-icon"
                  rel="noreferrer"
                >
                  <i className={icon}></i>
                </a>
              </li>
            );
          })}
        </ul>
      </div>
    </nav>
  );
};
export default Navbar;
