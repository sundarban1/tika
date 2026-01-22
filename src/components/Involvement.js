\const Involvement = () => {
  const orgs = [
    { name: 'Jaycees', role: 'President', years: '2021-2023' },
    { name: 'Rotaract', role: 'Member', years: '2019-2021' },
    { name: 'Cooperative Group', role: 'Coordinator', years: '2020-2023' }
  ];
  return (
    <section id="involvement">
      <h2>Organizational Involvement</h2>
      <div className="organizations">
        {orgs.map((org, i) => (
          <div key={i} className="organization-card">
            <h3>{org.name}</h3>
            <p>{org.role}</p>
            <p>{org.years}</p>
            <div className="photos-placeholder">Event Photos</div>
          </div>
        ))}
      </div>
    </section>
  );
};
export default Involvement;
