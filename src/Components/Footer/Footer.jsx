import React from 'react'
import './footer.css'
import vide02 from '../../Assets/video2.mp4'

const Footer = () => {
  return (
    <section className="footer">
      <div className="videoDiv">
        <video src={vide02} loop autoPlay muted type="video/mp4"></video>
      </div>

      <div className="secContent container">
        <div className="contactDiv flex"></div>
      </div>
    </section>
  )
}

export default Footer