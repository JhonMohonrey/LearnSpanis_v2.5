import React from 'react';

function Header(props) {
    let forPractice = props.isActive[0].practice ? "activeSpan" : null
    let forCreateCards = props.isActive[0].createCards ? "activeSpan" : null
    let forAbout = props.isActive[0].about ? "activeSpan" : null

    return (
        <div className='HeaderContainer'>
            <h1>
                Learn <span>Spanish</span> v2.5
            </h1>

            <div className='HeaderMenu'>
                <span className={forPractice}>
                    <p onClick={props.practiceBtn}>Practice</p>
                </span>
                <span className={forCreateCards}>
                    <p onClick={props.CreateCardBtn}>Create-Cards</p>
                </span>
                <span className={forAbout}>
                    <p onClick={props.AboutBtn}>About</p>
                </span>
            </div>
        </div>
    );
}

export default Header;