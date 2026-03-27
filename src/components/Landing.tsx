import { PropsWithChildren } from "react";
import "../styles/components/Landing.css";
import Pattern from "./Pattern";

const Landing = ({ children }: PropsWithChildren) => {
  return (
    <>
      <div className="landing-section" id="landingDiv">
        <Pattern />
        <div className="landing-container">
          <div className="landing-intro">
            <h2>Hi! I'm</h2>
            <h1>
              SHASHANK
              <br />
              <span>PALINGI</span>
            </h1>
          </div>
          <div className="landing-info">
            <h3>A Full Stack</h3>
            <h2 className="landing-info-h2">
              <div className="landing-h2-1">Developer</div>
              <div className="landing-h2-2">Engineer</div>
            </h2>
            <h2>
              <div className="landing-h2-info">Engineer</div>
              <div className="landing-h2-info-1">Developer</div>
            </h2>
          </div>
        </div>
        {children}
      </div>
    </>
  );
};

export default Landing;
