import React from 'react';
import CreateCards from './asset/createCards.png';
import About from './asset/about.png';
import flashCard from './asset/cards.png';

function Header(props) {
    let forPractice = props.isActive[0].practice ? "activeSpan" : null
    let forCreateCards = props.isActive[0].createCards ? "activeSpan" : null
    let forAbout = props.isActive[0].about ? "activeSpan" : null

    return (
        <div className='HeaderContainer'>
            <h1 className='title'>
                Flash<span>Card</span> <span className='version'>v2.5</span>
            </h1>

            <div className='HeaderMenu'>
                <span className={forPractice}>
                    <p onClick={props.practiceBtn}>
                        <img src={flashCard} />
                    </p>
                </span>
                <span className={forCreateCards}>
                    <p onClick={props.CreateCardBtn}>
                        <img src={CreateCards} />
                    </p>
                </span>
                <span className={forAbout}>
                    <p onClick={props.AboutBtn}>
                        <img src={About} />
                    </p>
                </span>
            </div>
        </div>
    );
}

export default Header;