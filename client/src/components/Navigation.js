import React from 'react';
import './Navigation.css';

const Navigation = () => {
    return (
		<header className="fixed w-100">
		  <nav className="fw6 ttu tracked white">
		    <h1 className="tc db tt" href="#" title="Home">
		    	Introspect
		    	<span className="fr ph2">&#8942;</span>
		    </h1>
		  </nav>
		</header>
    );
}

export default Navigation;