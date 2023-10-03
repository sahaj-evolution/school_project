import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar'
import { Link } from 'react-router-dom';


function Header() {
    return (
        <>
          <Navbar bg="dark" data-bs-theme="dark">
            <Container>
              <Navbar.Brand>Navbar</Navbar.Brand>
                <Nav className="me-auto">
                    <Link to="/dashboard" className='me-3'>Dashboard</Link>
                    <Link to="/present" className='me-3'>Present</Link>
                    <Link to="/absent" className='me-3'>Absent</Link>
                </Nav>
            </Container>
          </Navbar>
          <br />
        </>
      );
}


export default Header;