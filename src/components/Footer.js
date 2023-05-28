import { socialLink } from '../data';
import PageLink from './PageLink';

const Footer = () => {
  return (
    <footer className="section footer">
      <PageLink classPos1="footer-links" classPos2="footer-link" />

      <ul className="footer-icons">
        {socialLink.map((link) => (
          <li key={link.id}>
            <a href={link.href} target={link.target} className="footer-icon">
              <i className={link.icon}></i>
            </a>
          </li>
        ))}
      </ul>

      <p className="copyright">
        copyright &copy; Backroads travel tours company
        <span id="date"></span> all rights reserved
      </p>
    </footer>
  );
};
export default Footer;
