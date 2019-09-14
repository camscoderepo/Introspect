import React from 'react';

const Navigation = () => {
    return(
    <nav className="dt dt--fixed w-100 border-box pa3 ph5-ns bb b--black-10">
        <a className="dtc v-mid link dim w-25" href="#" title="Home">
        </a>
        <div id="menu" class="static-ns absolute mt5 mt0-ns left-100 db dtc-ns v-mid w-50 w-100-ns w-75-ns h-80 tr">
            <a class="link dim dark-gray tr tl-ns f3 f5-ns db dib-ns mr3 mr4-ns" href="#" title="Home">Home</a>
            <a class="link dim dark-gray tr tl-ns f3 f5-ns db dib-ns mr3 mr4-ns" href="#" title="About">About</a>
            <a class="link dim dark-gray tr tl-ns f3 f5-ns db dib-ns mr3 mr0-ns" href="#" title="Contact">Contact</a>
        </div>
    </nav>
    ); 
}

export default Navigation;