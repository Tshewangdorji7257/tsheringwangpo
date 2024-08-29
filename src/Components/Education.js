import SchoolIcon from "@material-ui/icons/School";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import StarIcon from "@material-ui/icons/Star";

const Education = () => {
  const items = [
    {
      cardTitle: "Collage Of Science And Technology",
      cardSubtitle: "B.Sc. in Software Engineering (2nd Year).",
      coursesHead: "Courses So Far: ",
      cardDetailedText: [
        "Computer Science Fundamentals (CSF101)",
        "Data Science Fundamentals (DSF101)",
        "UI/UX Design - User Interface / User Experience Design (SDA101)",
        "Web Development - Frontend Development (WEB101)",
        "Web Development - Backend Development (WEB102)",
        "AI - Deep Learning (DAM101)",
        "Advanced Software Engineering",
        "Database Management Systems (DBS101)",
      ].map(function (course) {
        return <li>{course}</li>;
      }),
      date: "2023 - 2024",
    },
  ];

  return (
    <section id="education" class="about background-alt">
      <div class="container" data-aos="fade-up">
        <div class="section-title">
          <h2>Education</h2>
        </div>

        <div class="row">
          <div class="col-lg-12 d-flex justify-content-center">
            <VerticalTimeline className="custom-line">
              {items.map((data, i) => (
                <VerticalTimelineElement
                  key={i}
                  className="vertical-timeline-element--work"
                  contentStyle={{ background: "#343a40" }}
                  date={data.date}
                  dateClassName="timeline-date"
                  contentArrowStyle={{
                    borderRight: "7px solid  rgb(33, 150, 243)",
                  }}
                  iconStyle={{
                    background: "#0563bb",
                    color: "#fff",
                  }}
                  icon={<SchoolIcon />}
                >
                  <h3
                    className="vertical-timeline-element-title"
                    style={{
                      fontSize: "14",
                      color: "rgba(255, 255, 255, 0.8)",
                    }}
                  >
                    {data.cardTitle}
                  </h3>
                  <h4
                    className="vertical-timeline-element-subtitle"
                    style={{
                      fontSize: "1.2em",
                      fontWeight: "350",
                      color: "#7e8890",
                      marginTop: "5px",
                    }}
                  >
                    {data.cardSubtitle}
                  </h4>
                  <h5
                    className="vertical-timeline-element-subtitle"
                    style={{
                      fontSize: "1em",
                      fontWeight: "250",
                      color: "#7e8890",
                      marginTop: "5px",
                    }}
                  >
                    {data.coursesHead}
                  </h5>
                  <p
                    style={{
                      fontSize: "1em",
                      fontWeight: "350",
                      color: "#74808a",
                    }}
                  >
                    {data.cardDetailedText}
                  </p>
                </VerticalTimelineElement>
              ))}
              <VerticalTimelineElement
                iconStyle={{
                  background: "#0563bb",
                  color: "#fff",
                }}
                icon={<StarIcon />}
              />
            </VerticalTimeline>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Education;
