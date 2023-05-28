import { pageLinks } from '../data';

const PageLink = ({ classPos1, classPos2 }) => {
  return (
    <ul className={classPos1}>
      {pageLinks.map((footer) => (
        <li key={footer.id}>
          <a href={footer.href} className={classPos2}>
            {footer.text}
          </a>
        </li>
      ))}
    </ul>
  );
};
export default PageLink;
