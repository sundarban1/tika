// ============================================
// components/Timeline.jsx
// ============================================
import React from 'react';

const journey = [
  { 
    year: "2024 – Present", 
    title: "Cooperative Professional", 
    desc: "Leading governance initiatives, overseeing financial operations, and enhancing member services to build a stronger, more transparent cooperative community." 
  },
  { 
    year: "2022 – 2023", 
    title: "President – Jaycees", 
    desc: "Spearheaded youth leadership development programs and community engagement initiatives, fostering growth and empowerment among young leaders." 
  },
  { 
    year: "2020 – 2021", 
    title: "Member – Rotaract", 
    desc: "Actively contributed to community service projects and leadership development activities, building networks and creating positive social impact." 
  },
  { 
    year: "2018", 
    title: "Early Leadership Journey", 
    desc: "Began volunteering in youth and community programs, laying the foundation for a career dedicated to public service and community development." 
  }
];

export default function Timeline() {
  return (
    <section id="timeline" className="section bg-soft">
      <div className="container">
        <h2>Leadership Journey</h2>
        <p className="text-muted" style={{ marginBottom: '48px' }}>
          A progressive path of growth, service, and impact
        </p>
        <div className="timeline">
          {journey.map((item, i) => (
            <div key={i} className="timeline-item">
              <span className="dot"></span>
              <div className="timeline-box">
                <small>{item.year}</small>
                <h3>{item.title}</h3>
                <p>{item.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}