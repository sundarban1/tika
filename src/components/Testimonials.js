import React from 'react';
const Testimonials = () => {
  const testimonials=[
    {name:'John Doe',quote:'Sundar is an exceptional community leader.'},
    {name:'Jane Smith',quote:'Impressive work in cooperative management.'}
  ];
  return (
    <section id="testimonials">
      <h2>Testimonials</h2>
      {testimonials.map((t,i)=>(
        <div key={i} className="testimonial">
          <p>"{t.quote}"</p>
          <strong>- {t.name}</strong>
        </div>
      ))}
    </section>
  );
};
export default Testimonials;
