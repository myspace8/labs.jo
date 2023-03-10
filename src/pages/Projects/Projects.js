import "./Projects.scss";

export default function Projects() {
  return (
    <div>
      <div className="card-container">
        <div className="card">
          <div className="media-img">
            <img src={"images/avatar.JPG"} width={300} height={250} alt="" />
          </div>
          <div className="media-desc">
            <h3>{"Quiz App"}</h3>
            <p>{"I fucused on implementing 'timer' as a functionality."}</p>
          </div>
          <div className="links">
            <a target='_blank' href="https://quizapp-ruby-pi.vercel.app/">View Project</a> 
            <a href="/">Source Code</a>
          </div>
        </div>
        <div className="card">
          <div className="media-img">
            <img src={"images/avatar.JPG"} width={300} height={250} alt="" />
          </div>
          <div className="media-desc">
            <h3>{"SpaceX Website Clone"}</h3>
            <p>{'SpaceX'}</p>
          </div>
          <div className="links">
            <a target='_blank' href="https://space-x-website-clone.vercel.app/">View Project</a>
            <a href="/">Source Code</a>
          </div>
        </div>
      </div>
    </div>
  );
}
