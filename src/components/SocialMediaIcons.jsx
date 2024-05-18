const SocialMediaIcons = () => {
  return (
    <div className="flex items-center justify-center md:justify-start my-10 gap-7">
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
        href="https://youtube.com/@mtss-usj?si=tHGT6hVa42xyTJVq"
        target="_blank"
        rel="noreferrer"
      >
        <img alt="youtube-link" src="../assets/youtube1.png" width={40}height={40} color="white"style={{color:"white"}}/>
      </a>
    </div>
  );
};

export default SocialMediaIcons;
