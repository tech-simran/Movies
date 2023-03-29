import React from "react";
import { useState, useEffect } from "react";
import axios from "axios";
import ArrowDropUpIcon from '@mui/icons-material/ArrowDropUp';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import UserNavbar from "./UserNavbar";
import Button from 'react-bootstrap/Button';
import Container from "react-bootstrap/Container";
import { ListItem } from "@mui/material";
import moment from 'moment';
const MoviesList = () => {
  const [data, setData] = useState([]);
  const getMovies = async () => {
    const res = await axios.post("https://hoblist.com/api/movieList", {
      category: "movies",
      language: "kannada",
      genre: "all",
      sort: "voting",
    });
    setData(res.data.result)
    console.log("response of api", res.data.result);
  };
  useEffect(() => {
    getMovies();
  }, []);
  const textStyle = {
    fontSize:"15px",  fontFamily: "Lucida Console",
    fontWeight:"bold"
  }
  const spanStyle = {
    fontSize:"15px",  
    fontWeight:"light",
    text:"center"
  }
  return (
    <>
    <UserNavbar/>
    {
      data.map((item,index)=>{
        return(<>
              <Container style={{background:"white",height:"370px",marginTop:"20px",width:"620px"}}>
     <div className="d-flex">
            <div style={{marginTop:"80px",marginRight:"20px"}}>
            <ArrowDropUpIcon style={{fontSize:"50px"}}/>
              <h4 style={{text:"center" ,marginLeft:"20px"}}>1</h4>
               
            <ArrowDropDownIcon style={{fontSize:"50px"}} />
            <h6 style={{marginLeft:"10px"}}>Votes</h6> 
            </div>
         
          <div style={{margin:"10px"}}>
            <img
              src={item.poster}
              width={120}
              height={290}
              className=' shadow rounded-2'
            />
          </div>
          <div style={{marginTop:"20px"}}>
           <h4>{item.title}</h4>
          <p style={spanStyle}><span style={textStyle}>Genre:</span>{item.genre} </p>
           <p style={spanStyle}><span style={textStyle}>Director:</span>{item.director}</p>
           <p style={spanStyle}><span style={textStyle}>Starring:</span>{item.stars} </p>
           <p style={spanStyle}><span style={textStyle}>Company:</span>Geeksynergy Technologies Pvt Ltd </p>
           <p style={spanStyle}>Mins | {item.language} | {moment.utc(item.releasedDate).format('Do MMM')} </p>
           <p style={spanStyle} className='text-info'>{item.pageViews} views |  voted by {item.totalVoted} people </p>
          </div>
        </div>
        <div className='d-grid '>
         <Button variant="primary"  size ="lg">
        Watch Trailer
      </Button>
      </div>
     </Container>
        </>)
      })
    }
    
     
    </>
  );
};

export default MoviesList;
