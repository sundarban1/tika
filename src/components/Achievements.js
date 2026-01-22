import React from 'react';
const Achievements = () => {
  const achievements = ['Award 1', 'Award 2', 'Award 3'];
  return (
    <section id="achievements">
      <h2>Achievements & Awards</h2>
      <ul>{achievements.map((a,i)=><li key={i}>{a}</li>)}</ul>
    </section>
  );
};
export default Achievements;
