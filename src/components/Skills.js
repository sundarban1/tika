import React from 'react';
const Skills = () => {
  const skills = [
    {name:'Leadership',level:'90%'},
    {name:'Event Planning',level:'85%'},
    {name:'Public Speaking',level:'80%'},
    {name:'Cooperative Management',level:'75%'}
  ];
  return (
<section id="skills">
  <h2>Skills & Expertise</h2>

  <div className="skills-grid">
    {skills.map((s, i) => (
      <div key={i} className="skill-item">
        <div className="skill-header">
          <span>{s.name}</span>
          <span>{s.level}</span>
        </div>

        <div className="skills-bar">
          <div
            className="skills-bar-fill"
            style={{ '--skill-width': s.level }}
          />
        </div>
      </div>
    ))}
  </div>
</section>

  );
};
export default Skills;
