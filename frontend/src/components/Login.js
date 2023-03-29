import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Container from "react-bootstrap/Container";
import { useState,useEffect } from 'react';
import { useNavigate,NavLink } from 'react-router-dom';
import './login.css'
function Login() {
   const navigate = useNavigate()
  const [email,setEmail] = useState("")
  const [password,setPassword] = useState("")
  const [localemail,selocalemail] = useState("")
  const [localPass,setlocalpass] =useState("")
  const [status,setStatus] = useState(false)
  const getLocalStorage = ()=>{
     const storageEmail = localStorage.getItem("email")
     const storagePassword = localStorage.getItem("password")
     console.log(storageEmail,storagePassword)
     selocalemail(storageEmail)
     setlocalpass(storagePassword)
}
 console.log("local.........",localPass,localemail)
 const postData = ()=>{
    if(email === localemail && password ===localPass){
        setStatus(true)
    }
    setEmail("")
    setPassword("")
   
    
  
 }
//  console.log("status.......",status)
  useEffect(()=>{
    getLocalStorage()
  })
  
  return (
    <>
    {
        status?navigate("/movies"): <Container className="shadow-sm p-5 bg-#A9A9A9 rounded justify-content-center" style={{width:"600px",height:"600px",marginTop:"80px"}}>
        <Form>
          
          {/* <h2>{localStorage.getItem('password')}</h2> */}
        <h2 className='text-white'>Login</h2>
    
        <Form.Group className="mb-3 text-white" controlId="formBasicEmail">
           <Form.Label>Email address</Form.Label>
           <Form.Control type="email" name='email' value={email} onChange={(e)=>setEmail(e.target.value)} />
         
         </Form.Group>
   
         <Form.Group className="mb-3 text-white" controlId="formBasicPassword">
           <Form.Label>Password</Form.Label>
           <Form.Control type="password" value={password} onChange={(e)=>setPassword(e.target.value)}/>
         </Form.Group>
         <Form.Group className="mb-3 " controlId="formBasicPassword">
          <Form.Text className=" text-white">Don't have any account? <NavLink to='/signup'>signup</NavLink> </Form.Text>
         </Form.Group>
         <div className='d-grid mt-2'>
            <Button variant="secondary" size ="lg" onClick={postData}>
           Submit
         </Button>
       
         </div>
       </Form>
        </Container>
    }
    
    </>
    
  );
}

export default Login;