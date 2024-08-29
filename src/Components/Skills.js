const Skills = () => {
  const skills = [
    "HTML",
    "CSS",
    "JavaScript",
    "Python",
    "Machine Learning",
    "Deep Learning",
    "MySQL",
    "MongoDB (Basic)",
    "React (Basic)",
    "Hono & Express (Basic)",
  ];
  return ( 
    <section id="skills" class="skills section-bg"> 
      <div class="container" data-aos="fade-up"> 
        <div class="section-title"> 
          <h2>Skills</h2> 
        </div> 
        <div> 
          <ul> 
            {skills.map((skill, i) => ( 
              <li key={i}>{skill}</li> 
            ))} 
          </ul> 
        </div> 
      </div> 
    </section> 
  );  
}; 
export default Skills; 
