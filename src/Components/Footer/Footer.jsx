import React, { useEffect } from 'react'
import './footer.css'
import vide02 from '../../Assets/video2.mp4'
import { FiSend } from 'react-icons/fi'
import { MdOutlineTravelExplore } from 'react-icons/md'
import { AiOutlineTwitter } from 'react-icons/ai'
import { AiFillYoutube } from 'react-icons/ai'
import { AiFillInstagram } from 'react-icons/ai'
import { FaTripadvisor } from 'react-icons/fa'
import { FiChevronRight } from 'react-icons/fi'
import Aos from 'aos'
import 'aos/dist/aos.css'

const Footer = () => {
  useEffect(()=>{
    Aos.init({duration: 2000})
  }, [])

  return (
    <section className="footer">
      <div className="videoDiv">
        <video src={vide02} loop autoPlay muted type="video/mp4"></video>
      </div>

      <div className="secContent container">
        <div className="contactDiv flex">
          <div data-aos="fade-up" className="text">
            <small>KEEP IN TOUCH</small>
            <h2>Travel with us</h2>
          </div>

          <div className="inputDiv flex">
            <input data-aos="fade-up" type="text" placeholder='Enter Email Address' />
            <button data-aos="fade-up" className='btn flex' type='submit'>
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

            <div data-aos="fade-up" className="footerPara">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa fugiat nulla incidunt! Ab voluptatem natus at? Voluptatum quibusdam suscipit et eum tempore debitis cumque repudiandae recusandae. Excepturi ipsa rem eveniet?
            </div>

            <div data-aos="fade-up" className="footerSocials flex">
              <AiOutlineTwitter className="icon"/>
              <AiFillYoutube className="icon"/>
              <AiFillInstagram className="icon"/>
              <FaTripadvisor className="icon"/>
            </div>
          </div>
          <div className="footerLinks grid">
            {/* group one */}
            <div data-aos="fade-up" data-aos-duration="3000" className="linkGroup">
              <span className="groupTitle">
                OUR AGENCY
              </span>

              <li className="footerList flex">
                <FiChevronRight className="icon"/>
                Services
              </li>

              <li className="footerList flex">
                <FiChevronRight className="icon"/>
                Insurance
              </li>

              <li className="footerList flex">
                <FiChevronRight className="icon"/>
                Agency
              </li>

              <li className="footerList flex">
                <FiChevronRight className="icon"/>
                Tourism
              </li>

              <li className="footerList flex">
                <FiChevronRight className="icon"/>
                Payment
              </li>

            </div>

            {/* group two */}
            <div data-aos="fade-up" data-aos-duration="4000" className="linkGroup">
              <span className="groupTitle">
                PARTNERS
              </span>

              <li className="footerList flex">
                <FiChevronRight className="icon"/>
                Bookings
              </li>

              <li className="footerList flex">
                <FiChevronRight className="icon"/>
                Trivago
              </li>

              <li className="footerList flex">
                <FiChevronRight className="icon"/>
                Rentals
              </li>

              <li className="footerList flex">
                <FiChevronRight className="icon"/>
                TripAdvisor
              </li>

              <li className="footerList flex">
                <FiChevronRight className="icon"/>
                MakeMyTrip
              </li>

            </div>
            {/* group three */}
            <div data-aos="fade-up" data-aos-duration="5000" className="linkGroup">
              <span className="groupTitle">
                FLIGHTS USED
              </span>

              <li className="footerList flex">
                <FiChevronRight className="icon"/>
                FlyEmirates
              </li>

              <li className="footerList flex">
                <FiChevronRight className="icon"/>
                Qatar
              </li>

              <li className="footerList flex">
                <FiChevronRight className="icon"/>
                Lufthansa
              </li>

              <li className="footerList flex">
                <FiChevronRight className="icon"/>
                AirFrance
              </li>

              <li className="footerList flex">
                <FiChevronRight className="icon"/>
                AirCanada
              </li>

            </div>
          </div>

          <div className="footerDiv flex">
            <small>BEST TRAVEL PLATFORM</small>
            <small>COPYRIGHT RESERVED - EDDYSAM 2023</small>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Footer