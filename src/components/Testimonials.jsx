import React from 'react'
import Testimonial from "./Testimonial.jsx";

export default function Testimonials() {
  return (
  	<div id="Testimonial" className="section">
  		<h1 className="title">Testimonials</h1>
  		<div className="row">
	  		<Testimonial
	  			img="https://thispersondoesnotexist.com/image"
	  			review="Ultrices tempus porttitor dui metus. Fusce enim tellus dignissim non nibh enim pellentesque. Sed turpis nec fermentum porta. Id libero dolor a semper vulputate gravida. Pharetra potenti at amet sit quis lacus. Nunc nisl praesent."
	  			name="John Smith"
	  			company="Bla Bla Inc."
	  		/>

	  		<Testimonial
	  			img="https://thispersondoesnotexist.com/image"
	  			review="Ultrices tempus porttitor dui metus. Fusce enim tellus dignissim non nibh enim pellentesque. Sed turpis nec fermentum porta. Id libero dolor a semper vulputate gravida. Pharetra potenti at amet sit quis lacus. Nunc nisl praesent."
	  			name="John Smith"
	  			company="Bla Bla Inc."
	  		/>

	  		<Testimonial
	  			img="https://thispersondoesnotexist.com/image"
	  			review="Ultrices tempus porttitor dui metus. Fusce enim tellus dignissim non nibh enim pellentesque. Sed turpis nec fermentum porta. Id libero dolor a semper vulputate gravida. Pharetra potenti at amet sit quis lacus. Nunc nisl praesent."
	  			name="John Smith"
	  			company="Bla Bla Inc."
	  		/>

	  	</div>
    </div>
  );
}