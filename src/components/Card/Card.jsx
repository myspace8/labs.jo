import './Card.scss'

function Card({src, title, desc}) {
  return (
    <a href='/' className='card'>
        <div className="media-img">
            <img src={src} width={300} height={250} alt="" />
        </div>
        <div className="media-desc">
            <h3>{title}</h3>
            <p>{desc}</p>
        </div>
    </a>
  )
}

export default Card
