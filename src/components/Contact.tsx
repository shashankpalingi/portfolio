import { MdArrowOutward, MdCopyright } from "react-icons/md";
import "../styles/components/Contact.css";

const Contact = () => {
  return (
    <div className="contact-section section-container" id="contact">
      <div className="contact-container">
        <h3>Contact</h3>
        <div className="contact-flex">
          <div className="contact-box">
            <h4>Email</h4>
            <p>
              <a href="mailto:shashankpalingi08@gmail.com" data-cursor="disable">
                shashankpalingi08@gmail.com
              </a>
            </p>
            <h4>Education</h4>
            <p>BTech in Computer Science</p>
          </div>
          <div className="contact-box">
            <h4>Social</h4>
            <a
              href="https://github.com/shashankpalingi"
              target="_blank"
              data-cursor="disable"
              className="contact-social"
            >
              Github <MdArrowOutward />
            </a>
            <a
              href="https://www.linkedin.com/in/shashank-palingi-29ba8731b/"
              target="_blank"
              data-cursor="disable"
              className="contact-social"
            >
              Linkedin <MdArrowOutward />
            </a>
            {/* Removed Twitter and Instagram as they are not on resume */}
          </div>
          <div className="contact-box">
            <h2>
              Designed and Developed <br /> by <span>Shashank Palingi</span>
            </h2>
            <h5>
              <MdCopyright /> 2026
            </h5>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
