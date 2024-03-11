import SocialMediaIcons from "../components/SocialMediaIcons";

const Footer = () => {
  return (
    <footer className="h-64 bg-red pt-10">
      <div className="w-10/12 mx-auto">
      <p className="font-playfair font-semibold text-2xl text-yellow">
          FOLLOW US ON
          </p>
        <div className="md:flex justify-center md:justify-between text-center ">
          
        <SocialMediaIcons />
         
        </div>
      </div>
      <p className="font-playfair text-center m-0 p-0 text-md text-yellow">
            ©2024 All Rights Reserved.
          </p>
    </footer>
  );
};

export default Footer;
