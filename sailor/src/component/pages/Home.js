// React import
import React from 'react'

// File imports
import '../../App.css'
import WelcomeSection from '../layout/WelcomeSection'
import Cards from '../layout/Cards'
import Footer from '../layout/Footer'

function Home() {
    return (
        <>
            <WelcomeSection />
            <Cards />
            <Footer />
        </>
    );
}

export default Home;