import React from 'react'

const About = () => {
  return (
    <section className={`flex flex-col bg-white py-20 text-3xl md:text-4xl`}>
      <div className="container mx-auto px-11">
        <p className='leading-tight max-w-5xl mx-auto text-4xl lg:text-4xl tracking-tight'>
          <strong>We deliver your shipments on time, safely. </strong> Our team of expert dispatchers have helped safely and timely deliver our shipments
        </p>
      </div>
      <div className="container mx-auto text-center mt-28">
        <h2>Our Team</h2>
      </div>
    </section>
  )
}

export default About