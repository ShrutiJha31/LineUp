
import React,{Fragment,Component} from 'react'
import  {Link} from 'react-router-dom';



function GetHolidays()
 {
   const showCal =()=>{
  var iframe = document.getElementById('calendarEmbed');
  var email;
  var element = document.getElementById('email');
  if(element!=null)
  email=element.value;
  else
  email=null;

  var blocker = document.getElementById('calendarEmbedBlocker');
  if (email && /.+\@.+/.test(email)){
      iframe.src = 'https://calendar.google.com/calendar/embed?src=en.indian%23holiday%40group.v.calendar.google.com&ctz=Asia%2FKolkata' + encodeURI(email);
      blocker.style.display = 'none';
  }
  else {
      alert("That doesn't look like a valid email...");
      blocker.style.display = 'block';
  }
}
  
return (
  <div>
    <div className='form-group'>
  <input type="email" placeholder="user@gmail.com" id="email"/>
  </div>
  <button className=" btn btn-primary " onClick={showCal}>Load</button>
  
  <h3>Your calendar:</h3>
  <div id="calendarEmbedWrapper">
      <iframe id="calendarEmbed"></iframe>
      <div id="calendarEmbedBlocker">
          <p>Please enter email and click load</p>
      </div>
  </div>
  </div>
)
  
};
export default GetHolidays;