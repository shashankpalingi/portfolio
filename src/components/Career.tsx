import "../styles/components/Career.css";

const Career = () => {
  return (
    <div className="career-section section-container">
      <div className="career-container">
        <h2>
          My career <span>&</span>
          <br /> experience
        </h2>
        <div className="career-info">
          <div className="career-timeline">
            <div className="career-dot"></div>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>HackIndia 2025</h4>
                <h5>Collaborator</h5>
              </div>
              <h3>2025</h3>
            </div>
            <p>
              Collaborated in a fast-paced team to design scalable AI-based solutions under time constraints.
            </p>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>AI Hack Day 2025</h4>
                <h5>NLP Developer</h5>
              </div>
              <h3>2025</h3>
            </div>
            <p>
              Worked on evaluation metrics and analysis of model outputs.
            </p>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>Google Solution Challenge 2025</h4>
                <h5>Contributor</h5>
              </div>
              <h3>2025</h3>
            </div>
            <p>
              Worked on evaluation metrics and analysis of model outputs.
            </p>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>BTech, Computer Science (Data Science)</h4>
                <h5>VNRVJIET, Hyderabad</h5>
              </div>
              <h3>2023 - 2027</h3>
            </div>
            <p>
              Coursework includes Artificial Intelligence, Data Structures & Algorithms, Operating Systems, DBMS, Computer Networks, and Machine Learning. CGPA: 8.20/10
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Career;
