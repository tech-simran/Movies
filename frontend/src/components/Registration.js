import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Container from "react-bootstrap/Container";
import { useState,useEffect } from 'react';
import { NavLink,useNavigate } from 'react-router-dom';
import './login.css'
function Registration() {
  const navigate = useNavigate()
  const [name,setName]  = useState("")
  const [email,setEmail] = useState("")
  const [number,setNumber] = useState("")
  const [profession,setProfession] = useState("")
  const [password,setPassword] = useState("")
  const [status,setStatus] = useState("")
  const postLocalStorage = ()=>{
    localStorage.setItem("name",name)
    localStorage.setItem("email",email)
    localStorage.setItem("number",number)
    localStorage.setItem("profession",profession)
    localStorage.setItem("password",password)
    setStatus(true)
    setName(" ")
    setEmail(" ")
    setNumber(" ")
    setProfession(" ")
    setPassword(" ")
  }
  if(status===true){
    navigate('/')
  }
  return (
    <>
     <Container className="shadow-sm p-5 bg-#A9A9A9 rounded justify-content-center" style={{width:"600px",height:"600px",marginTop:"60px"}}>
     <Form>
    
     <h2 className='text-white'>Sign Up</h2>
     <Form.Group className="mb-3 text-white" >
        <Form.Label>Name</Form.Label>
        <Form.Control type="text" name='name' value={name} onChange={(e)=>setName(e.target.value)}/>
       
      </Form.Group>
      <Form.Group className="mb-3 text-white" controlId="formBasicEmail">
        <Form.Label>Email address</Form.Label>
        <Form.Control type="email" name='email' value={email} onChange={(e)=>setEmail(e.target.value)} />
      
      </Form.Group>

      <Form.Group className="mb-3 text-white" controlId="formBasicPassword">
        <Form.Label>Password</Form.Label>
        <Form.Control type="password"  name='password' value={password} onChange={(e)=>setPassword(e.target.value)}/>
      </Form.Group>
      <Form.Group className="mb-3 text-white" controlId="formGridState">
          <Form.Label>Profession</Form.Label>
          <Form.Select name='profession' value ={profession} onChange={(e)=>setProfession(e.target.value)} defaultValue="Choose...">
            <option>Choose...</option>
            <option>Fullstack Developer</option>
            <option>Backend Developer</option>
            <option>Frontend Developer</option>
            
          </Form.Select>
        </Form.Group>
      <Form.Group className="mb-3 text-white" >
        <Form.Label>Phone Number</Form.Label>
        <Form.Control type="text" name='name' value={number} onChange={(e)=>setNumber(e.target.value)}/>
       
      </Form.Group>
      <Form.Group className="mb-3 text-white" controlId="formBasicPassword">
          <Form.Text className='text-white'> Allready have an account? <NavLink to='/' className='text-secondary' >login</NavLink> </Form.Text>
         </Form.Group>
      <div className='d-grid mt-2'>
         <Button variant="secondary" size ="lg" onClick={postLocalStorage}>
        Submit
      </Button>
    
      </div>
    </Form>
     </Container>
    </>
    
  );
}

export default Registration;