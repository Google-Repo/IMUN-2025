import React from 'react'
import image from '../assets/image.png'
import Aboutcontent from '../components/Aboutcontent'
import Aboutinstitue from '../components/Aboutinstitue'
import logo from '../assets/logo.png'
import AboutUshero from '../components/AboutUshero'
export default function About() {
  return (
    <div>
      <AboutUshero />
      <Aboutcontent />
      <Aboutinstitue />
    </div>
  )
}
