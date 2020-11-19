// React imports
import React from 'react'

// File imports
import { Button } from './Button'
import '../../App.css'
import './WelcomeSection.css'

function WelcomeSection() {
    return (
        <div className='hero-container'>
            <h1>Adventure Awaits</h1>
            <p>What are you waiting for?</p>
            <div className='hero-btns'>
                <Button path='/sign-up' className='btns' buttonStyle='btn--outline' buttonSize='btn--large'>
                    Get Started Today
                </Button>
            </div>
            <div className='hero-btns'>
                <Button path={{pathname: 'https://www.youtube.com/watch?v=zJCrrTk-dLQ'}} className='btns' buttonStyle='btn--primary' buttonSize='btn--large'>
                    Watch Trailer
                </Button>
            </div>
        </div>
    );
}

export default WelcomeSection;
