import "./Projects.scss";
import { IoLockClosedOutline } from "react-icons/io5";


export default function Projects() {
  return (
    <div>
      <div className="card-container">
        <div className="card">
          <div className="media-img">
            {/* <img src={"images/avatar.JPG"} width={300} height={250} alt="" /> */}
          </div>
          <div className="media-desc">
            <h3>{"Profeed"}</h3>
            <p>{"This app aggregate feeds from selected websites. So I don't miss the essentials."}</p>
          </div>
          <div className="links">
            <a target='_blank' rel="noreferrer" href="https://profeed-delta.vercel.app/">View Project</a>
            <a href="https://github.com/myspace8/Profeed">Source Code</a>
          </div>
        </div>
        <div className="card">
          <div className="media-img">
            {/* <img src={"images/avatar.JPG"} width={300} height={250} alt="" /> */}
          </div>
          <div className="media-desc">
            <h3>{"Official Website"}</h3>
            <p>{'Archviews Ghana Limited - a construction company in Ghana.'}</p>
          </div>
          <div className="links">
            <a target='_blank' rel="noreferrer" href="https://www.archviewsgh.com/">View Project</a>
            <a className="flex item-aline" href="#!">
              <span>Source code</span>
              <IoLockClosedOutline className="text-black" />
            </a>
          </div>
        </div>
        {/*  */}
        <div className="card">
          <div className="media-img">
            {/* <img src={"images/avatar.JPG"} width={300} height={250} alt="" /> */}
          </div>
          <div className="media-desc">
            <h3>{"E-commerce"}</h3>
            <p>{"This app helps Samdy Import's customers to browse and make enquiries on products quickly."}</p>
          </div>
          <div className="links">
            <a target='_blank' rel="noreferrer" href="https://samdyimports.vercel.app/">View Project</a>
            <a className="flex item-aline" href="#!">
              <span>Source code</span>
              <IoLockClosedOutline className="text-black" />
            </a>
          </div>
        </div>
        <div className="card">
          <div className="media-img">
            {/* <img src={"images/avatar.JPG"} width={300} height={250} alt="" /> */}
          </div>
          <div className="media-desc">
            <h3>{"LinkApp"}</h3>
            <p>{'This app allows influencers to do more.'}</p>
          </div>
          <div className="links">
            <a target='_blank' rel="noreferrer" href="https://liinkapp.vercel.app/">View Project</a>
            <a className="flex item-aline" href="#!">
              <span>Source code</span>
              <IoLockClosedOutline className="text-black" />
            </a>
          </div>
        </div>

        <div className="card">
          <div className="media-img">
            {/* <img src={"images/avatar.JPG"} width={300} height={250} alt="" /> */}
          </div>
          <div className="media-desc">
            <h3>{"Cloned Website"}</h3>
            <p>{'SpaceX - some years ago.'}</p>
          </div>
          <div className="links">
            <a target='_blank' rel="noreferrer" href="https://space-x-website-clone.vercel.app/">View Project</a>
            <a href="https://github.com/myspace8/SpaceX-website">Source Code</a>
          </div>
        </div>
        {/*  */}
        <div className="card">
          <div className="media-img">
            {/* <img src={"images/avatar.JPG"} width={300} height={250} alt="" /> */}
          </div>
          <div className="media-desc">
            <h3>{"Portfolio Website"}</h3>
            <p>{"This is an official page for Adriana Appiagyei Nimo, an award-winning entrepreneur in Ghana."}</p>
          </div>
          <div className="links">
            <a target='_blank' rel="noreferrer" href="https://adriananimo.com">View Project</a>
            <a className="flex item-aline" href="#!">
              <span>Source code</span>
              <IoLockClosedOutline className="text-black" />
            </a>
          </div>
        </div>
        <div className="card">
          <div className="media-img">
            {/* <img src={"images/avatar.JPG"} width={300} height={250} alt="" /> */}
          </div>
          <div className="media-desc">
            <h3>{"YouTube Downloader"}</h3>
            <p>{"A script in python to run and download any YouTube video."}</p>
          </div>
          <div className="links">
            <a target='_blank' rel="noreferrer" href="https://github.com/myspace8/YouTube-downloader">View Project</a>
            <a href="https://github.com/myspace8/YouTube-downloader">Source Code</a>
          </div>
        </div>
      </div>
    </div>
  );
}
