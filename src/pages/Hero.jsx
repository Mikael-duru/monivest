import React from 'react';

function Hero() {
  return (
    <section className="container mx-auto vh-100 d-flex flex-column justify-content-center align-items-center text-center">
      <h1 className="display-4 fw-bold text-dark">
        Business Advisory Services
      </h1>
      <p className="text-muted">
        Disaster recovery planning, business continuity management, and disaster recovery.
      </p>
      <button type="button" className="btn btn-outline-primary">Get Quote Now</button>
    </section>
  )
}

export default Hero;