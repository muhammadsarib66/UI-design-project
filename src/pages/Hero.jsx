import React from 'react'
import Button from '../components/common/Button'

const Hero = () => {
  return (
    
    <section className='min-h-svh flex flex-col  space-y-10 text-center justify-center items-center'>
        <p className='font-bold text-3xl md:text-5xl '>
Unlock opportunities <br/> with industry experts
        </p>
        <p className='font-semibold text-lg md:text-2xl'>
Connect with the experts and learn from their <br/> experience
        </p>

        <Button btnText="Watch Demo" style=" shadow-black shadow-2xl border-2 bg-white font-bold text-2xl py-4 px-6 " icon='fa-play' />
    </section>
  )
}

export default Hero