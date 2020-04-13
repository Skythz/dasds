import React from 'react'

export default function Feature(props) {
  return (
  	<div class="feature col-md-4 col-12">
  		<div className="imgContainer">
  			<span className="helper"></span>
  			<img src={props.img} alt="Isometric Graphic" className="featureimg"/>
  		</div>
    	<h1 className="subtitle">{props.title}</h1>
    	<p>{props.desc}</p>
    </div>
  );
}