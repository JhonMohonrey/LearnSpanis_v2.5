import React from 'react';
import Footer from './Footer';

function About(props) {
    return (
        <div className='aboutContainer'>
            {/* <h1>About</h1> */}
            <div className='aboutContent'>
                {/* <p className='name'>Hello, I'm Jhon Ramos, the creator of FlashCard.</p> */}

                <h3>Empowering Language Acquisition through Flashcard Technology</h3>

                <p>
                Flashcard is a mobile application designed to revolutionize vocabulary acquisition for language learners. Recognizing the limitations of existing tools, I, a fellow language enthusiast, developed Flashcard to address these shortcomings and optimize the learning experience.
                </p>

                <h3>
                Unparalleled Flexibility and Organization
                </h3>

                
                <p>
                Flashcard offers unparalleled flexibility with the ability to create unlimited cards and organize them into meticulously categorized folders. Whether you're mastering specific topics, tackling challenging courses, or conquering new languages, Flashcard empowers you to tailor your learning journey with ease. The intuitive interface allows for effortless card creation, editing, and deletion, ensuring a seamless and personalized experience.
                </p>

                <h3>
                A User-Centric Approach to Language Learning
                </h3>


                <p>
                Flashcard prioritizes user experience by providing an intuitive and user-friendly platform. Our goal is to transform the memorization process into an engaging and enjoyable experience.  Whether your objective is exam preparation, language acquisition from scratch, or vocabulary expansion, Flashcard is your ideal companion.
                </p>
            </div>
          

            <Footer />
        </div>
    );
}

export default About;