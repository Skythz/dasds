import React from 'react'

export default function NavItem(props) {
  return (
  	<li className="nav-item">
	    <a className={"nav-link" + (props.active ? ' active' : "")} href={props.name + ".html"}>{props.name}</a>
	</li>
  );
}