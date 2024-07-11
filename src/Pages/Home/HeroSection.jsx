import React from 'react';
import './styles.css'; // Ensure this path is correct and points to your main CSS file

export default function HeroSection() {
    return (
        <section id="heroSection" className="hero--section">
            <div className="hero--section--content--box">
                <div className="hero--section--content">
                    <p className="section--title"></p>
                    <h1 className="hero--section--title">
                        <span className="hero--section-title--color">Hi!</span>{" "}
                        <br />
                        I am Mae Barcoma
                    </h1>
                    <p className="hero--section-description">
                        <span className="special-description">
                            I prefer to describe myself as "delightfully difficult"
                            <br /> And it would just be easier if you agreed.
                        </span>
                    </p>
                </div>
            </div>
            <div className="hero--section--img">
                <img src="./img/hero_img.jpg" alt="Hero Section" />
            </div>
        </section>
    );
}
