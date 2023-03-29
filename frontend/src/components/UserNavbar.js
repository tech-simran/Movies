import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import Button from 'react-bootstrap/Button';
import { useNavigate } from 'react-router-dom';
function UserNavbar() {
  const navigate = useNavigate()
  const logout = ()=>{
       localStorage.clear()
       navigate('/')
  }

  return (
    <Navbar bg="dark" variant="dark">
      <Container>
        <Navbar.Brand href="#home">MovieShow</Navbar.Brand>
        <Navbar.Toggle />
        <Navbar.Collapse className="justify-content-end">
          <Navbar.Text>
            Signed in as: <a href="#login">{localStorage.getItem('email')}</a>
          </Navbar.Text>
        </Navbar.Collapse>
      </Container>
      <Button variant="light" className='m-2' onClick={()=>navigate('/cards')} >Company info</Button>{' '}
      <Button variant="light" onClick={logout} >Logout</Button>{' '}
    </Navbar>
  );
}

export default UserNavbar;