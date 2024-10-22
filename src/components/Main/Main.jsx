import { Link } from 'react-router-dom'
import { FaArrowRightLong } from "react-icons/fa6";

import './Main.scss'

function Main() {
  return (
      <main>
        <div className='occupation'>
          {/* <p>I am 24yo</p> */}
          <p>I am Nana Acheampong. I've worked with Bismuth Institute of Technology as product manager and instructor where I taught 20+ students how to code. These days, I collaborate with organizations and individual businesses to explore new opportunities in digital technolgy. I'm also building some cool stuff with AI models.</p>
        </div>

        <div className="card-container">
        <Link to='/projects' className='link'>
                  <span>{'My projects'}</span>
                  <FaArrowRightLong />
          </Link>
        </div>
      </main>
  )
}

export default Main
