import "./footer.css";
import { AiFillInstagram } from "react-icons/ai";
import { IoLogoWhatsapp } from "react-icons/io";
import { FaTelegram } from "react-icons/fa";
import { FaFacebookF } from "react-icons/fa";
const Footer = () => {
  return (
    <>
      <footer>
        <a href="">expertsproject502@gmail.com</a>
        <div className="icons">
          <a href="">
            <AiFillInstagram />
          </a>
          <a href="">
            <IoLogoWhatsapp />
          </a>
          <a href="">
            <FaTelegram />
          </a>
          <a href="">
            <FaFacebookF />
          </a>
        </div>
      </footer>
    </>
  );
};
export default Footer;
