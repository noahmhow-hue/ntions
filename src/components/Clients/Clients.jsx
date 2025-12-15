import './Clients.css';

function Clients() {
  const clients = [
    { name: 'TechFlow', initial: 'TF' },
    { name: 'Elevate', initial: 'EL' },
    { name: 'Nova', initial: 'NV' },
    { name: 'Pulse', initial: 'PL' },
    { name: 'Vertex', initial: 'VX' },
    { name: 'Apex', initial: 'AX' },
  ];

  return (
    <section className="clients">
      <div className="clients-container">
        <p className="clients-label">Trusted by innovative companies worldwide</p>
        <div className="clients-grid">
          {clients.map((client, index) => (
            <div key={index} className="client-logo">
              <span className="client-initial">{client.initial}</span>
              <span className="client-name">{client.name}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Clients;
