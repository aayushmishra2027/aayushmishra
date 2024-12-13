import React from 'react'
import './about.css'
import myImage from '../../assets/my-image2.jpg'
import {GiGraduateCap} from 'react-icons/gi'
import {BsBookmarkStar} from 'react-icons/bs'
import {TfiWorld} from 'react-icons/tfi'

const About = () => {
  return (
    <section id='about'>
      
      <h5>Learn</h5>
      <h2>About Me</h2>

      <div className="container about__container">

          <div className="about__me">
            <div className="about__me-image">
                <img src={myImage} alt="Me" />
            </div>
          </div>

          <div className="about__content">
            <div className="about__cards">

              <article className='about__card'>
                  <GiGraduateCap className='about__icon'/>
                  <h5>Degree</h5>
                  <small>MIT Manipal <br /><i>BTech. Mechatronics Engineering</i></small>
              </article>

              <article className='about__card'>
                  <BsBookmarkStar className='about__icon'/>
                  <h5>Current GPA</h5>
                  <small>7.79</small>
              </article>

              <article className='about__card'>
                  <TfiWorld className='about__icon'/>
                  <h5>Top Skills</h5>
                  <small>
                    <ul>
                      <li>Front-End Development</li>
                      <li>Graphic Design</li>
                      <li>Industrial Robotics</li>
                    </ul>
                  </small>
              </article>

              

            </div>
             <ul>
    <li>Pursuing <b>Bachelor's in Robotics Engineering</b> at MIT Manipal.</li>
    <li>Just a Tech Enthusiast who Loves to Code, Study and Learn Astronomy.</li>
    <li>I have quite an experience in the field of Web-Development and Industrial Robotics.</li>
    <li>Looking for solving Real-World Problems and also Exploring the field of Robotics more in-depth.</li>
</ul>
          </div>
      </div>
    </section>
  )
}

export default About
