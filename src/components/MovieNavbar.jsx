import { Nav, Navbar, Container } from 'react-bootstrap'

const MovieNavbar = () => {
  return (
    <Navbar expand='lg' data-bs-theme='dark' bg='dark'>
      <Container>
        <Navbar.Brand href='#home'>React-Bootstrap</Navbar.Brand>
        <Navbar.Toggle aria-controls='basic-navbar-nav' />
        <Navbar.Collapse id='basic-navbar-nav'>
          <Nav className='me-auto'>
            <Nav.Link>Home</Nav.Link>
            <Nav.Link>About</Nav.Link>
            <Nav.Link>Browse</Nav.Link>
            <Nav.Link>Blog</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  )
}
export default MovieNavbar
