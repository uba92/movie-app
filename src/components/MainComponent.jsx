import { useEffect, useState } from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import SingleCard from './SingleCard'

const MainComponent = () => {
  const [char, setChar] = useState([])

  //Funzione per richiesta dati alla API
  const getData = async () => {
    try {
      const response = await fetch('https://api.disneyapi.dev/character')
      if (response.ok) {
        const data = await response.json()
        setChar(data.data)
        console.log(data.data)
      } else {
        throw new Error('Errore nella richiesta')
      }
    } catch (error) {
      console.log('error', error)
    }
  }

  //chiamo la funzione per recuperare i dati

  useEffect(() => {
    getData()
  }, [])

  return (
    <Container>
      <Row className=' justify-content-center mt-5 g-3'>
        {char.length !== 0 &&
          char.slice(0, 9).map((singleChar, i) => {
            return (
              <Col key={i} xs={12} md={4} lg={3}>
                <SingleCard singleChar={singleChar} />
              </Col>
            )
          })}
      </Row>
    </Container>
  )
}

export default MainComponent
