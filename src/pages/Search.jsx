import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faYoutube } from '@fortawesome/free-brands-svg-icons';

export default function Search() {
  // passing the handleAddToPlaylist function to the YouTubeSearch component

  return (
    <div className="contact-container">
      <h1>Find Songs</h1>

      <div className="separator-line"></div>

      <div className="contact-icons">
        <div className="icon-container">
          <a href="https://youtube.com" className="icon">
            <FontAwesomeIcon icon={faYoutube} size="2x" />
          </a>
          <p className="contact-text">YouTube</p>
        </div>

<div className='center-text'>
<p className='yellow-text'>The YouTube API has a daily limit, so if the search doesn't work, the limit has probably been exceeded for the day.</p>
</div>
      </div>

      <div className="separator-line"></div>

      <div className="separator-line"></div>
    </div>
  );
}