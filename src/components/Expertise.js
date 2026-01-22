// ============================================
// components/Expertise.jsx
// ============================================
import React from 'react';

const expertise = [
  { 
    title: "Cooperative Governance", 
    desc: "Expertise in board coordination, policy development, and transparent decision-making processes that strengthen organizational integrity." 
  },
  { 
    title: "Youth Leadership Development", 
    desc: "Dedicated to mentoring and guiding the next generation of leaders through structured programs and hands-on experience." 
  },
  { 
    title: "Institutional Management", 
    desc: "Skilled in designing sustainable organizational structures and operational frameworks that drive long-term success." 
  },
  { 
    title: "Financial Oversight", 
    desc: "Proficient in budgeting, financial planning, and governance to ensure fiscal responsibility and accountability." 
  },
  { 
    title: "Community Program Planning", 
    desc: "Strategic approach to designing and implementing impactful programs that address community needs and create lasting value." 
  },
  { 
    title: "Public Representation", 
    desc: "Strong communication and advocacy skills for representing organizational initiatives and building stakeholder relationships." 
  }
];

export default function Expertise() {
  return (
    <section id="expertise" className="section">
      <div className="container">
        <h2>Areas of Expertise</h2>
        <p className="text-muted" style={{ marginBottom: '24px' }}>
          Comprehensive capabilities for effective community leadership
        </p>
        <div className="expertise-cards">
          {expertise.map((item, i) => (
            <div className="expertise-card" key={i}>
              <h3>{item.title}</h3>
              <p>{item.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
