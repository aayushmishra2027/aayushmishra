import React from 'react'
import './myprojects.css'
import IMG1 from '../../assets/img1.jpg'
import IMG2 from '../../assets/img2.png'
import IMG4 from '../../assets/img4.png'

const Myprojects = () => {
  return (
    <section id='myprojects'>

      <h5>My Wall Of</h5>
      <h2>Projects</h2>

      <div className="container portfolio__container">

        <article className='portfolio__item'>
            <div className="portfolio__item-image">
                <img src={IMG1} alt="" />
            </div>
            <h3>BloggerZ - Blogging Website</h3>
            <small className='text-light'>FrontEnd | Graphic Design</small>
            <div className="portfolio__item-cta">
              <a href="https://github.com/aayushmishra2027" target="_blank" rel='noreferrer' className='btn'>Github</a>
            </div>
              
        </article>
        <article className='portfolio__item'>
            <div className="portfolio__item-image">
                <img src={IMG2} alt="" />
            </div>
            <h3>Flight Controls and Dynamics</h3>
            <small className='text-light'>Robotics | Simulink | Matlab</small>
            <div className="portfolio__item-cta">
              <a href="https://github.com/aayushmishra2027" target="_blank" rel='noreferrer' className='btn'>Github</a>  
            </div>
            
        </article>
        <article className='portfolio__item'>
            <div className="portfolio__item-image">
                <img src={IMG4} alt="" />
            </div>
            <h3>My Portfolio(This website)</h3>
            <small className='text-light'>ReactJs | HTML | CSS | JavaScript | Convex</small>
            <div className="portfolio__item-cta">
              <a href="https://notion-clone-v1.vercel.app/" target="_blank" rel='noreferrer' className='btn btn-primary'>Visit Website</a>  
            </div>
            
        </article>
      </div>
    </section>
  )
}

export default Myprojects
