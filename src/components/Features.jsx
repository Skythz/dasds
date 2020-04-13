import React from 'react'
import Feature from './Feature.jsx'

export default function Features() {
  return (
  	<div id="features">
  		<div className="row">
		    <Feature
		    	title = "Hardware"
		    	desc = "2 - 3 lines at most describing the feature"
		    	img = "https://image.flaticon.com/icons/svg/2301/2301129.svg"
		    />

		    <Feature
		    	title = "DNS"
		    	desc = "2 - 3 lines at most describing the feature"
		    	img = "https://image.flaticon.com/icons/svg/2301/2301129.svg"
		    />

		    <Feature
		    	title = "Hardware"
		    	desc = "2 - 3 lines at most describing the feature"
		    	img = "https://image.flaticon.com/icons/svg/2301/2301129.svg"
		    />
		</div>
    </div>
  );
}