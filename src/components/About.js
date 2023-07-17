import React from "react";
import Links from './Links'

function About(props) {
  let propsBio
  if(props.bio === '' || !props.bio){
    propsBio = false
  }else{
    propsBio = true
  }
  return (
    <div id="about">
      <h2>About Me</h2>
      {propsBio && <p>{props.bio}</p>}
      <img src="https://i.imgur.com/mV8PQxj.gif" alt="I made this" />
      {/* add your <Links /> component here */}

      <Links github={<a href="https://github.com/liza">https://github.com/liza</a>} linkedin={<a href="https://www.linkedin.com/in/liza/">https://www.linkedin.com/in/liza/</a>}></Links>
    </div>
  );
}

export default About;
