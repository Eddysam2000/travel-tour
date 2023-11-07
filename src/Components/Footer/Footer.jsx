import React from 'react'
import './footer.css'
import vide02 from '../../Assets/video2.mp4'
import { FiSend } from 'react-icons/fi'
import { MdOutlineTravelExplore } from 'react-icons/md'

const Footer = () => {
  return (
    <section className="footer">
      <div className="videoDiv">
        <video src={vide02} loop autoPlay muted type="video/mp4"></video>
      </div>

      <div className="secContent container">
        <div className="contactDiv flex">
          <div className="text">
            <small>KEEP IN TOUCH</small>
            <h2>Travel with us</h2>
          </div>

          <div className="inputDiv flex">
            <input type="text" placeholder='Enter Email Address' />
            <button className='btn flex' type='submit'>
              SEND <FiSend className="icon" />
            </button>
          </div>
        </div>

        <div className="footerCard flex">
          <div className="footerIntro flex">
            <div className="logoDiv">
              <a href="#" className='logo flex'>
                <MdOutlineTravelExplore/> Travel.
              </a>
            </div>

            <div className="footerPara">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa fugiat nulla incidunt! Ab voluptatem natus at? Voluptatum quibusdam suscipit et eum tempore debitis cumque repudiandae recusandae. Excepturi ipsa rem eveniet?
            </div>

            <div className="footerSocials">
              
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Footer