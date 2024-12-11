import { useState } from 'react'
import { Card } from 'react-bootstrap'

const SingleCard = (props) => {
  const [isActive, setActive] = useState(false)

  const handleMouseEnter = () => {
    setActive(true)
  }
  const handleMouseLeave = () => {
    setActive(false)
  }
  return (
    <Card
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      className={
        isActive
          ? 'scale h-100 bg-black text-light border border-1 border-secondary'
          : 'h-100 bg-black text-light border border-1 border-secondary'
      }
    >
      <div className=' d-flex justify-content-center' style={{ height: '60%' }}>
        <Card.Img
          src={props.singleChar.imageUrl}
          className=' h-100'
          style={{ width: '200px' }}
        />
      </div>

      <Card.Body className=' d-flex flex-column align-items-center'>
        <Card.Title>{props.singleChar.name}</Card.Title>
      </Card.Body>
    </Card>
  )
}

export default SingleCard
