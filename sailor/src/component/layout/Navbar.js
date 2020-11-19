// React imports
import React, {useState, useEffect} from 'react'; 
import { Link } from 'react-router-dom'; 

// File imports
import { Button } from './Button';
import './Navbar.css'

// Full navbar
function Navbar() {
	// This is the event for the 'hamburger' menu as the user clicks on it
	const [click, setClick] = useState(false);
	const handleClick = () => setClick(!click);

	// Sets the state for the buttons on the pages
	const [button, setButton] = useState(true);

	// This helps when resizing the window of the app
	// the buttons and other headers hide and go under the
	// 'hamburger' menu
	const showButton = () => {
		// Checks for the size of the window
		if (window.innerWidth <= 960) {
			setButton(false);
		}
		else {
			setButton(true);
		}
	};

	// This is used when the application is accessed on mobile
	// this will help with the buttons staying where they are
	useEffect(() => {
		showButton()
	}, []);

	// Going back to the button event, we resize the window and hide the button
	window.addEventListener('resize', showButton);

	// 
	const closeMobileMenu = () => setClick(false);
	
	return (
		<>
			<nav className='navbar'>
				<div className='navbar-container'>
					<Link to='/' className='navbar-logo' onClick={closeMobileMenu}>
						Sailor Nomad <i className="fas fa-passport"/>
					</Link>

					{/* This is where we have the 'hamburger' menu */}
					<div className='menu-icon' onClick={handleClick}>
						<i className={click ? 'fas fa-times' : 'fa fa-bars'} />
					</div>
					{/* If on mobile, clicking the menu turns it into an X */}
					<ul className={click ? 'nav-menu active' : 'nav-menu'}>
						{/* Home page */}
						<li className='nav-item'>
							<Link to='/' className='nav-links' onClick={closeMobileMenu}>
								Home
							</Link>
						</li>
						{/* Services page */}
						<li className='nav-item'>
							<Link to='/services' className='nav-links' onClick={closeMobileMenu}>
								Services
							</Link>
						</li>
						{/* About page */}
						<li className='nav-item'>
							<Link to='/about' className='nav-links' onClick={closeMobileMenu}>
								About
							</Link>
						</li>
						{/* Login page */}
						<li className='nav-item'>
							<Link to='/login' className='nav-links-mobile' onClick={closeMobileMenu}>
								Log In
							</Link>
						</li>
						{/* Sign Up page button */}
						<li className='nav-item'>
							<Link to='/sign-up' className='nav-links-mobile' onClick={closeMobileMenu}>
								Sign Up
							</Link>
						</li>
					</ul>
					{button && <Button buttonStyle='btn--outline'>Log In</Button>}
					{button && <Button buttonStyle='btn--outline'>Sign Up</Button>}
				</div>
			</nav>
		</>
    );
}

export default Navbar;