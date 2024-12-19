import { Link, useLocation } from 'react-router-dom';
import '../App.css';

function Navigation() {
  const currentPage = useLocation().pathname;

  return (
    <ul className="nav nav-tabs">
      <li className="nav-item">
        <Link to="/" className={currentPage === '/' ? 'nav-link active' : 'nav-link'}>
          Current Activity
        </Link>
      </li>

      <li className="nav-item">
        <Link to="/Calender" className={currentPage === '/Calender' ? 'nav-link active' : 'nav-link'}>
          Calendar
        </Link>
      </li>

      <li className="nav-item">
        <Link to="/Search" className={currentPage === '/Search' ? 'nav-link active' : 'nav-link'}>
          Search
        </Link>
      </li>

      <li className="nav-item">
        <Link to="/Suggestions" className={currentPage === '/Suggestions' ? 'nav-link active' : 'nav-link'}>
          Song Suggestions
        </Link>
      </li>

      {/* Link to an external website */}
      <li className="nav-item">
        <a
          href="https://example.com" // Replace with your external URL
          className="nav-link"
          target="_blank" // Opens the link in a new tab
          rel="noopener noreferrer" // Adds security for external links
        >
          Your Platform
        </a>
      </li>
    </ul>
  );
}

export default Navigation;