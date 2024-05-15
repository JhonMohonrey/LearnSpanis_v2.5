import React from 'react';
import htmlLogo from './Tools/html.png'
import cssLogo from './Tools/css.png'
import SassLogo from './Tools/sass.png'
import jsLogo from './Tools/js.png'
import ReactLogo from './Tools/React.png'

function Footer(props) {
    return (
        <div className='footer'>
            <h2>
                FlashCard v2.5
            </h2>
            <span className='by'>by <span className='myName'>Jhon Mohonrey Ramos</span></span>

            <h3>Tools</h3>
            <div className='tools'>
                <img src={htmlLogo} />
                <img src={cssLogo} />
                <img src={SassLogo} />
                <img src={jsLogo} />
                <img src={ReactLogo} />
            </div>
            <p className='copy'>Copyright &copy; 2024 - {new Date().getFullYear()} FlashCard. All rights reserved.</p>
        </div>
    );
}

export default Footer;