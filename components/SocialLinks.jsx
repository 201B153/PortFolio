const socialLinks = {
  instagram: 'https://www.instagram.com/mstomar698/',
  github: 'https://github.com/201b153',
  linkedin: 'https://www.linkedin.com/in/mayank-tomar-726187205/',
  mail: 'mailto:tomarm698@gmail.com',
  discord: 'https://discord.gg/2tbhSKxF',
};

const SocialLinks = () => {
  return (
    <div className="btn-wrapper text-lg">
      <div className="media-icons">
        <a href={socialLinks.linkedin}>
          <i className="fa fa-linkedin"></i>
        </a>
        &nbsp;&nbsp;
        <a href={socialLinks.github}>
          <i className="fa fa-github"></i>
        </a>
        &nbsp;&nbsp;
        <a href={socialLinks.mail}>
          <i className="fa fa-envelope"></i>
        </a>
        &nbsp;&nbsp;
        {/* <a href={socialLinks.discord}>
          <i className="fa fa-discord" aria-hidden="true"></i>
  </a>*/}
        <a href={socialLinks.instagram}>
          <i className="fa fa-instagram"></i>
        </a>
        &nbsp;&nbsp;
      </div>
    </div>
  );
};

export default SocialLinks;
