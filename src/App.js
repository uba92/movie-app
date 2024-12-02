import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import MovieNavbar from './components/MovieNavbar'
import { Component } from 'react'
import MovieDropDown from './components/MovieDropDown'
import { Row, Container, Col } from 'react-bootstrap'

class App extends Component {
  state = {
    movieTitle: 'Tre Uomini e una Gamba',
  }

  changeMovieTitle = (newMovie) => {
    this.setState({
      movieTitle: newMovie,
    })
  }
  render() {
    return (
      <div className='App'>
        <header>
          <MovieNavbar />
          <Container>
            <Row className='justify-content-center'>
              <Col md={4}>
                <MovieDropDown
                  movieTitle={this.state.movieTitle}
                  changeMovieTitle={this.changeMovieTitle}
                />
              </Col>
            </Row>
          </Container>
        </header>
      </div>
    )
  }
}
export default App
