import React from 'react'
import logo from '../assets/img/Logo-Pokemon3.png'
import Image from 'react-bootstrap/esm/Image'

const Home = () => {
  return (
    <div className='container text-center text-black'>
      <h2><span className='fw-bold'>Bienvenido Maestro Pokemon</span></h2>
      <Image src={logo} className='img-fluid d-block mx-auto w-80 h-100' arial-label="Logo Pokemon" alt='Logo Pokemon'/>
    </div>
  )
}

export default Home