import React from 'react'
import Isometric from '../img/Isometric.svg'

export default function Header() {
  return (
  	<div id="header">
    	<h1>Bla Bla Bla <br/> Important <br/> Slogan</h1>
    	<img src={Isometric} alt="Isometric Graphic" id="isometric"/>
    </div>
  );
}