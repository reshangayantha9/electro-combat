const SocialMediaIcons = () => {
  return (
    <div className="flex justify-center md:justify-start my-10 gap-7">
      <a
        className="hover:opacity-50 transition duration-500"
        href="https://www.linkedin.com/company/mtss-usj"
        target="_blank"
        rel="noreferrer"
      >
        <img alt="linkedin-link" src="../assets/linkedin.png" />
      </a>
      
      <a
        className="hover:opacity-50 transition duration-500"
        href="https://www.facebook.com/mtss.usj"
        target="_blank"
        rel="noreferrer"
      >
        <img alt="facebook-link" src="../assets/facebook.png" />
      </a>
      <a
        className="hover:opacity-50 transition duration-500"
        href=""
        // target="_blank"
        rel="noreferrer"
        download
      >
        <img alt="pdf-link" src="../assets/pdf.png" />
      </a>
    </div>
  );
};

export default SocialMediaIcons;
