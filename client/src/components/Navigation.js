import React from 'react';
import './Navigation.css';

const Navigation = () => {
    return (
		<header className="fixed w-100">
		  <nav>
		    <h1 className="normal fw6 ttu tc db tt pl4" href="#" title="Home">
		    	Introspect
		    	<span className="fr ph3">&#8942;</span>
		    </h1>
		  </nav>
		</header>
    );
}

export default Navigation;