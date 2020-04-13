import React from 'react'

export default function Testimonial(props) {
  return (
  	<div className="testimonial col-md-4 col-12">
  		<div className="card">
  			<img src={props.img}/>
  			<p className="review">{props.review}</p>
  			<h5 className="name">{props.name}</h5>
  			<h5 className="company-name">{props.company}</h5>
  		</div>
    </div>
  );
}