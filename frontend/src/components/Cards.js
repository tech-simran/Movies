import Card from 'react-bootstrap/Card';
import Container from 'react-bootstrap/Container';
function Cards() {
  const textStyle = {
    fontSize:"20px",  fontFamily: "Lucida Console",
    fontWeight:"bold"
  }
  const spanStyle = {
    fontSize:"20px",  
    fontWeight:"light",
    text:"center"
  }
 

  return (
    <>
     
    <Container style={{marginTop:"20px",width:"700px"}}>
    <Card  >
    <Card.Title><h1 style={{alignItems:"center",justifyContent:"center",display:"flex"}}>Company Information</h1></Card.Title>
      <Card.Body >
      <div  >
    <p style={spanStyle}><span style={textStyle}>Company:</span>Geeksynergy Technologies Pvt Ltd </p>
    <p style={spanStyle}><span style={textStyle}>Address:</span>Sanjayanagar, Bengaluru-56</p>
    <p style={spanStyle}><span style={textStyle}>Phone:</span>7049885348 </p>
    <p style={spanStyle}><span style={textStyle}>Email:</span>simran@gmail.com </p>
    </div>
      </Card.Body>
   
    </Card>
    </Container>
  
   
    
    
    </>
    
  );
}

export default Cards;