import React from 'react'
const truck = require("../assets/trucks.mp4")

const Masthead = () => {
  return (
    <section className='min-h-screen flex flex-col items-center justify-center'>
        <video autoPlay loop muted playInline className='absolute w-full h-full object-cover' src={truck}>
          {/* <source src="/assets/trucks.mv4" type="video/mp4; codec=hvc1"/>  */}
          {/* <source src="/assets/trucks.webm" type="video/webm; codec=vp9"/> */}
        </video>
        <div className="z-10 font-bold text-white drop-shadow-[0_5px_3px_rgba(0,0,0,0.5)] flex-1 flex items-center justify-center font-bold tight text-center flex-col">
            <h1 className='mb-5 text-5xl xl:text-6xl'>Free Style Trucking</h1>
            <h2 className='mb-5 text-2xl'>Be Free, Drive With Style</h2>
        </div>
    </section>
  )
}

export default Masthead