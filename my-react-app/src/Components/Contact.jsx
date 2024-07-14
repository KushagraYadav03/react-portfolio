import React from 'react';
import { FaInstagram, FaSquare, FaTwitterSquare, FaGithubSquare } from "react-icons/fa";
import { FaFacebookSquare, FaLinkedin } from "react-icons/fa";

const Contact = () => {
    return (
        <div className="container contact" id="contact">
            <h1>CONTACT ME</h1>
            <div className="contact-icon">
                <a href="https://www.google.com" target="_blank" className="items">
                    <FaInstagram className="ic" />
                </a>
                <a href="https://www.google.com" target="_blank" className="items">
                    <FaFacebookSquare className="ic" />
                </a>
                <a href="https://www.google.com" target="_blank" className="items">
                    <FaLinkedin className="ic" />
                </a>
                <a href="https://www.google.com" target="_blank" className="items">
                    <FaSquare className="ic" />
                </a>
                <a href="https://www.google.com" target="_blank" className="items">
                    <FaTwitterSquare className="ic" />
                </a>
                <a href="https://www.github.com" target="_blank" className="items">
                    <FaGithubSquare className="ic" />
                </a>
            </div>
        </div>
    );
};

export default Contact;
