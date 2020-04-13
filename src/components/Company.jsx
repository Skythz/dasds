import React from 'react'

export default function Company(props) {
  return (
  	<div className="company col-md-4 col-12">
  		<img src={props.logo}/>
  		<p className="desc">{props.desc}</p>
    </div>
  );
}