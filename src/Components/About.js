import img from "./images/wangpo_2.jpeg";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

export default function About() {
  return (
    <section id="about" class="about background-alt">
      <Container data-aos="fade-up">
        <div class="section-title">
          <h2>About Me</h2>
        </div>
        <Row>
          <Col lg={4} className="d-flex justify-content-center">
            <img
              src={img}
              alt="img2"
              height="100%"
              width="50%"
              style={{ borderRadius: "50%" }}
            />
          </Col>
          <Col lg={8} pt={4} className="content">
            <br></br>
            <h3>Software Engineering Student.</h3>
            <br></br>
            <p style={{ color: "#728394" }}>
              I am a Software Engineering student at the College of Science and
              Technology.
            </p>
            <br></br>
            <p style={{ color: "#728394" }}>
              I am passionate about programming and eager to apply my skills in
              real-world scenarios.
            </p>
            <br></br>
            <Row>
              <Col lg={4}>
                <ul>
                  <li>
                    <i class="bi bi-chevron-right"></i> <strong>Phone:</strong>{" "}
                    <span>+97517263253</span>
                  </li>
                  <li>
                    <i class="bi bi-chevron-right"></i>{" "}
                    <strong>Dzongkhag:</strong> <span>Paro, Naja</span>
                  </li>
                </ul>
              </Col>
              <Col lg={7}>
                <ul>
                  <li>
                    <i class="bi bi-chevron-right"></i> <strong>Degree:</strong>{" "}
                    <span>Software Engineering(Second Year)</span>
                  </li>
                  <li>
                    <i class="bi bi-chevron-right"></i> <strong>Email:</strong>{" "}
                    <span>
                      <a href="mailto:tsheringwangpodorji@gmail">
                        tsheringwangpodorji@gmail.com
                      </a>
                    </span>
                  </li>
                </ul>
              </Col>
            </Row>
          </Col>
        </Row>
      </Container>
    </section>
  );
}
