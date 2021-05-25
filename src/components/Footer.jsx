import React from "react";
import Container from "react-bootstrap/Container";

const Footer = (props) => {
  const bgStyle = { backgroundColor: "#f5f5f5" };

  return (
    <footer style={bgStyle} className="mt-auto py-5 text-center ">
      <Container>
        {props.children}
        <i className="fas fa-code" /> with <i className="fas fa-heart" /> by{" "}
        <a
          className="badge badge-dark"
          rel="noopener"
          href="https://github.com/hashirshoaeb"
          aria-label="My GitHub"
        >
          Hashir Shoaib
        </a>{" "}
        using <i className="fab fa-react" /> tweaked by{" "}
        <a
          className="badge badge-dark"
          rel="noopener"
          href="https://github.com/AstronomicaTCG"
          aria-label="My GitHub"
        >
          Astronomica TCG
        </a>{" "}
        <p>
          <small className="text-muted">
            This project is open source. Feel free to fork and make your own version.
          </small>
        </p>
        <div style={{marginBottom: "-5%"}}></div>
      </Container>
    </footer>
  );
};

export default Footer;
