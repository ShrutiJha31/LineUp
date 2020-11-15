import React,{Fragment,Component} from 'react'
import  {Link} from 'react-router-dom';
import Jha from './jha.jpg';
import Shukla from './bhavya.jpg';
import Verma from './Shukla.jpeg';
import Image from 'react-bootstrap/Image'
class Team extends Component{
  render()
  {
return (
  <div className="row">
  <div className="column">
    <div className="col-md-4">
    <div className="card">
      <div className="profilephoto">

      <Image src={Jha}  alt="Jha" style={{width: '250px', height:'250px'}} roundedCircle/>
     
     </div>

      <div className="container">
        <h2>Shruti Jha</h2>
        <p className="title">CSE , NIT Jamshedpur</p>
        <p>Chill , Code &amp; Csk</p>
        <p>shruti.skjha@gmail.com</p>
<a href ={`https://www.github.com/ShrutiJha31`}>
        <p><button className="button" >Github Profile</button></p></a>
      </div>
      
   </div> 
   </div>
  
</div>
  <div className="column">
    <div className="col-md-4">
    <div className="card">
    <div className="profilephoto">
     
     <Image src={Shukla}  alt="Jha" style={{width: '250px', height:'250px'}} roundedCircle />
    </div>
      <div className="container">
        <h2>Bhavya Shukla</h2>
        <p className="title">CSE , NIT Jamshedpur</p>
        <p>China Sucks!</p>
        <p>bhavyashukla16@gmail.com</p>
        <a href ={`https://www.github.com/BhavyaShukla16`}>
        <p><button className="button" >Github Profile</button></p></a>
      </div>
    </div>
    </div>
  </div>

  <div className="column">
    <div className="col-md-4">
    <div className="card">
    <div className="profilephoto">
    <Image src={Verma}  alt="Jha" style={{width: '250px', height:'250px'}} roundedCircle />
    </div>
      <div className="container">
        <h2>Shruti Verma</h2>
        <p className="title">CSE , NIT Jamshedpur</p>
        <p>My Life, No Rules!</p>
        <p>2019ugcs093@nitjsr.ac.in</p>
        <p><button className="button">Github Profile</button></p>
      </div>
    
    </div>
  </div>
 </div>
</div>
);
}
}
export default Team;