import React from 'react'
import Header from './components/Header.jsx'
import Nav from './components/Nav.jsx'
import Features from './components/Features.jsx'
import Companies from './components/Companies.jsx'
import Testimonials from './components/Testimonials.jsx'
import './App.css'


export default function App() {
  return (
  	<div id="app-inner">
	  	<Nav active="home"/>
	    <Header/>
	    <div className="container">
	    	<Features/>
	    	<Companies/>
	    	<Testimonials/>
	    </div>
	</div>
  );
}