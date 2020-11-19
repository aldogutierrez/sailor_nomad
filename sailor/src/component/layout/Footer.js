import React from "react";
import { Link } from "react-router-dom";
import { Button } from "./Button";

import "./Footer.css";

function Footer() {
	return (
		<div className="footer-container">
			<section className="footer-subscription">
				<p className="footer-subscription-heading">
					Join the Sailor Nomad newsletter to receive the best
					vacation options
				</p>
				<p className="footer-subscription-text">
					You may unsubscribe at any time
				</p>
				<div className="input-areas">
					<form>
						<input
							type="email"
							name="email"
							placeholder="Your Email:"
							className="footer-input"
						/>
						<Button buttonStyle="btn--outline">Subscribe</Button>
					</form>
				</div>
			</section>
			<div class="footer-links">
				<div className="footer-link-wrapper">
					<div class="footer-link-items">
						<h2>About Us</h2>
						<Link to="/sign-up">How it works</Link>
						<Link to="/">Terms of Service</Link>
					</div>
					<div class="footer-link-items">
						<h2>Contact Us</h2>
						<Link to={{pathname:"https://github.com/aldogutierrez"}} target="_blank">Contact</Link>
						<Link to={{pathname:"https://github.com/aldogutierrez/sailor_nomad"}} target="_blank">Support</Link>
						<Link to="/">Destinations</Link>
					</div>
				</div>
				<div className="footer-link-wrapper">
					<div class="footer-link-items">
						<h2>Social Media</h2>
						<Link to={{ pathname:'https://instagram.com' }} target="_blank">Instagram</Link>
						<Link to={{ pathname:'https://facebook.com' }} target="_blank">Facebook</Link>
						<Link to={{ pathname:'https://youtube.com' }} target="_blank">YouTube</Link>
						<Link to={{ pathname:'https://twitter.com' }} target="_blank">Twitter</Link>
					</div>
				</div>
			</div>
			<section class="social-media">
				<div class="social-media-wrap">
					<div class="footer-logo">
						<Link to="/" className="social-logo">
							Sailor Nomad <i className="fas fa-passport"/>
						</Link>
					</div>
					<small class="website-rights">Sailor Nomad © 2020</small>
					<div class="social-icons">
                        <Link class="social-icon-link facebook" to={{ pathname:'https://facebook.com' }} target="_blank" aria-label="Facebook"> <i class="fab fa-facebook-f" /></Link>
						<Link class="social-icon-link instagram" to={{ pathname:'https://instagram.com' }} target="_blank" aria-label="Instagram"><i class="fab fa-instagram" /></Link>
						<Link class="social-icon-link youtube" to={{ pathname:'https://youtube.com' }} target="_blank" aria-label="YouTube"><i class="fab fa-youtube" /></Link>
						<Link class="social-icon-link twitter" to={{ pathname:'https://twitter.com' }} target="_blank" aria-label="Twitter"><i class="fab fa-twitter" /></Link>
					</div>
				</div>
			</section>
		</div>
	);
}

export default Footer;
