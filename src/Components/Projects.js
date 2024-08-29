import React, { useState } from "react";
import Chip from "@material-ui/core/Chip";
import Button from "@material-ui/core/Button";
import AddIcon from "@material-ui/icons/Add";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import CodeIcon from "@material-ui/icons/Code";
import IconButton from "@material-ui/core/IconButton";
import RemoveIcon from "@material-ui/icons/Remove";

const Projects = () => {
  const items = [
    {
      cardTitle: "Bubble Sheet Detection (Basic)",
      cardDetailedText: [
        "Developed a basic Neural Network model for detecting and analyzing bubble sheets used in examinations.",
        "Key achievement: Detecting student number from the bubble sheet and automated scoring answers sheets achieving an accuracy of 60%.",
      ],
      technologies: ["Google Colab", "Pytorch", "OCR", "OMR"],
      links: [],
    },
    {
      cardTitle: "Instagram Clone (Basic)",
      cardDetailedText: [
        "Developed a basic Instagram frontend clone using React framework.",
        "Developed the backend using Hono and Prisma ORM for the basic CRUD operations. (Work in Progress)",
      ],
      technologies: ["React", "Tailwind & Chakra CSS", "Hono", "Prisma ORM"],
      links: [
        {
          url: "https://github.com/Norbu-d/Final-Frontend.git",
          text: "View Source Code (Frontend)",
        },
      ],
    },
    {
      cardTitle: "Pokedex",
      cardDetailedText: [
        "Built a functional web application using HTML, CSS, and Vanilla JavaScript to interact with a specified PokeAPI.",
        "Utilized DOM API, Node.js framework",
      ],
      technologies: ["Python", "Flask", "API"],
      links: [
        {
          url: "https://web101-cap1-1-0ajw.onrender.com/",
          text: "View Pokedex",
        },
      ],
    },
  ];

  const [limit, setLimit] = useState(3);
  const [loadButton, setLoadButton] = useState(true);
  const [lessButton, setLessButton] = useState(false);

  const loadMore = () => {
    setLimit(6);
    setLoadButton(false);
    setLessButton(true);
  };

  const loadLess = () => {
    setLimit(3);
    setLoadButton(true);
    setLessButton(false);
  };

  return (
    <section id="projects" className="about background-alt">
      <div className="container" data-aos="fade-up">
        <div className="section-title">
          <h2>Projects</h2>
        </div>
        <div className="row">
          <div className="col-lg-12 d-flex justify-content-center">
            <VerticalTimeline className="custom-line">
              {items.slice(0, limit).map((data, i) => (
                <VerticalTimelineElement
                  key={i}
                  className="vertical-timeline-element--work"
                  contentStyle={{ background: "#343a40" }}
                  dateClassName="timeline-date"
                  contentArrowStyle={{
                    borderRight: "7px solid rgb(33, 150, 243)",
                  }}
                  icon={<CodeIcon />}
                  iconStyle={{
                    background: "#0563bb",
                    color: "#fff",
                  }}
                >
                  <div className="projects-technologies">
                    {data.technologies.map((name, index) => (
                      <Chip key={index} label={name} />
                    ))}
                  </div>
                  <h3
                    className="vertical-timeline-element-title"
                    style={{
                      fontSize: "12px",
                      color: "rgba(255, 255, 255, 0.8)",
                    }}
                  >
                    {data.cardTitle}
                  </h3>
                  <ul style={{ color: "#74808a" }}>
                    {data.cardDetailedText.map((text, index) => (
                      <li key={index} style={{ fontSize: "1em", fontWeight: "350" }}>
                        {text}
                      </li>
                    ))}
                  </ul>
                  <div className="project-links">
                    {data.links.map((link, j) => (
                      <div key={j}>
                        <br />
                        <Button
                          variant="contained"
                          color="default"
                          target="_blank"
                          href={link.url}
                        >
                          {link.text}
                        </Button>
                      </div>
                    ))}
                  </div>
                </VerticalTimelineElement>
              ))}
              {loadButton && (
                <VerticalTimelineElement
                  iconOnClick={loadMore}
                  iconClassName="d-flex justify-content-center"
                  icon={
                    <IconButton aria-label="add">
                      <AddIcon
                        style={{
                          color: "#fff",
                          marginTop: "0.1px",
                        }}
                      />
                    </IconButton>
                  }
                  iconStyle={{
                    background: "#0563bb",
                    color: "#fff",
                  }}
                />
              )}
              {lessButton && (
                <VerticalTimelineElement
                  iconOnClick={loadLess}
                  iconClassName="d-flex justify-content-center"
                  icon={
                    <IconButton aria-label="remove">
                      <RemoveIcon
                        style={{
                          color: "#fff",
                          marginTop: "0.1px",
                        }}
                      />
                    </IconButton>
                  }
                  iconStyle={{
                    background: "#0563bb",
                    color: "#fff",
                  }}
                />
              )}
            </VerticalTimeline>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
