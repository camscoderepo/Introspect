import React from 'react';
import './Navigation.css';

const Navigation = () => {
    return (
		<header className="bg-orange fixed w-100 ph3 pv3 pv4-ns ph4-m ph5-l">
		  <nav className="fw6 ttu tracked">
		    <li className="tc db tt white" href="#" title="Home">Introspect</li>
		  </nav>
		</header>
    ); 
}

export default Navigation;