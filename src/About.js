import React from 'react';
import Footer from './Footer';

function About(props) {
    return (
        <div className='aboutContainer'>
            {/* <h1>About</h1> */}
            <div className='aboutContent'>
                <p className='name'>Hello, I'm Jhon Ramos, the creator of LearnSpanish.</p>
                <p>LearnSpanish is a flashcard application designed to help you memorize words quickly and efficiently. As a language learner myself, I understand the importance of vocabulary acquisition in the learning process. However, I found existing flashcard apps lacking in certain aspects, which is why I decided to create LearnSpanish.</p>

                
                <p>
    One of the unique features of LearnSpanish is the ability to create unlimited cards and folders. With LearnSpanish, you can organize your flashcards into folders based on different topics, courses, or languages. You can easily add, edit, or delete cards, allowing you to tailor your learning experience to your specific needs.</p>


                <p>My goal with LearnSpanish is to provide users with a user-friendly, intuitive, and effective tool to enhance their language learning experience. Whether you're studying for an exam, learning a new language, or simply looking to expand your vocabulary, LearnSpanish is here to make the memorization process easier and more enjoyable for you.</p>
            </div>
          

            <Footer />
        </div>
    );
}

export default About;