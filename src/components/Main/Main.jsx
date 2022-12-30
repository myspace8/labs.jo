import Card from '../Card/Card'
import './Main.scss'
import cardData from '../Card/data/data.js'

function Main() {
  return (
    <main>
      <div className='occupation'>
        <h1>Software Developer and Design Enthusiast</h1>
      </div>

      <div className="card-container">
        {cardData.map(card => (
          <Card 
          key={card.id}
          src={card.src}
          title={card.title}
          desc={card.desc}
          />
        ))}
      </div>
    </main>
  )
}

export default Main
