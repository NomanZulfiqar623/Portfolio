import React from 'react';
import "./Footerstyle.css";
import { FaHome, FaPhone, FaMailBulk, FaFacebook, FaTwitter, FaLinkedin } from 'react-icons/fa'

const Footer = () => {
    return (
        <div className='footer'>
            <div className='footer-container'>
                <div className="left">
                    <div className="location">
                        <h4>
                        <FaHome size={20} style={{ color: "#fff", marginRight: "2rem" }} />
                        <div>
                            <p>H # 13 Tajpura Lahore</p>
                            <p>Pakistan</p>
                        </div>
                        </h4>
                    </div>
                    <div className="phone">
                        <h4>
                        <FaPhone size={20} style={{ color: "#fff", marginRight: "2rem" }} />
                        <div>
                            <p>+92 306 733 0541</p>
                        </div>
                        </h4>
                    </div>
                    <div className="mail">
                        <h4>
                        <FaMailBulk size={20} style={{ color: "#fff", marginRight: "2rem" }} />
                        <div>
                            <p>NumanZulfiqa@gmail.com</p>
                        </div>

                        </h4>
                        
                    </div>
                </div>
                <div className="right">
                    <h4>About My Self</h4>
                    <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                        Tempore aperiam odit in dolorem fugiat vel enim.
                        Odit debitis eum quo?</p>
                    <div className="social">
                        <FaFacebook size={30} style={{ color: "#fff", marginRight: "1rem" }} />
                        <FaTwitter size={30} style={{ color: "#fff", marginRight: "1rem" }} />
                        <FaLinkedin size={30} style={{ color: "#fff", marginRight: "1rem" }} />

                    </div>
                </div>
            </div>
        </div>
    )
}

export default Footer