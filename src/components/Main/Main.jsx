import { Link } from 'react-router-dom'

import './Main.scss'

function Main() {
  return (
      <main>
        <div className='occupation'>
          <h1>Software Developer and Design Enthusiast</h1>
        </div>

        <div className="card-container">
    
          <Link to='/projects' className='card'>
              <div className="media-img">
                  <img src={'images/avatar.JPG'} width={300} height={250} alt="" />
              </div>
              <div className="media-desc">
                  <h3>{'Projects'}</h3>
                  <p>{'I love to build interesting websites and applications'}</p>
              </div>
          </Link>
          <Link to='/open_source' className='card'>
              <div className="media-img">
                  <img src={'images/avatar.JPG'} width={300} height={250} alt="" />
              </div>
              <div className="media-desc">
                  <h3>{'Open source'}</h3>
                  <p>{'I typically collaborate on mini-projects'}</p>
              </div>
          </Link>
          <Link to='/blog' className='card'>
              <div className="media-img">
                  <img src={'images/avatar.JPG'} width={300} height={250} alt="" />
              </div>
              <div className="media-desc">
                  <h3>{'Blog'}</h3>
                  <p>{'I write, read and research'}</p>
              </div>
          </Link>
        </div>
      </main>
  )
}

export default Main
