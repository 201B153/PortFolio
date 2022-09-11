import { Card, Col, Row, Container, Button } from 'reactstrap';
import SocialLinks from '../components/SocialLinks';

const GithubProfileCard = ({ prof }) => {
  return (
    <main className="bg-git">
      <div className="card text-center">
        <div className="card-body">
          <div className="d-flex justify-content-center">
            <h5 className="card-text">
              Thanks for reaching out. You can Conatct me
            </h5>
          </div>
          <div className="footer-btn d-flex justify-content-center">
            <Button
              className="icon-btn shadow text-info"
              color="transparent"
              href="#GithubProfileCard"
              rel="noopener"
              aria-label="Twitter"
            >
              <span className="icon-btn">
                <SocialLinks />
              </span>
            </Button>
          </div>
          <div className="d-flex justify-content-center">
            <Button
              className="btn-icon shadow text-info"
              color="transparent"
              href="https://www.google.com/maps/place/Gwalior,+Madhya+Pradesh/@26.214088,78.0508148,11z/data=!3m1!4b1!4m5!3m4!1s0x3976c5d1792291fb:0xff4fb56d65bc3adf!8m2!3d26.2124007!4d78.1772053"
              rel="noopener"
              aria-label="Twitter"
            >
              <span className="btn-inner--icon">
                <i className="fa fa-map-marker mr-2" />
              </span>
              <span className="nav-link-inner--text  ml-1">
                {prof.location}
              </span>
            </Button>
          </div>
        </div>
        <div className="card-footer text-muted">
          Made with ❤️ by @
          <a href="https://github.com/201B153" className="">
            201B153
          </a>
          [Mayank Singh Tomar]
        </div>
      </div>
    </main>
  );
};

export default GithubProfileCard;
