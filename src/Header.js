import { Navbar, Nav } from 'react-bootstrap'
import { Link } from 'react-router-dom'
function Header() {
  return (
    <div>
      <Navbar bg="dark" variant="dark">
        <Navbar.Brand href="#home">Navbar</Navbar.Brand>
        <Nav className="mr-auto nav-bar-wrapper">
          <Link to="add">Add Product</Link>
          <Link to="update">Update product</Link>
          <Link to="/login">Login</Link>
          <Link to="Registration">Registration </Link>
        </Nav>
      </Navbar>
    </div>
  )
}

export default Header
