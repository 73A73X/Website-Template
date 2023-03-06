import React from 'react';
import "./Styles/Styles.css";

function AboutPage() {
  return (
    <>
    <div style={{textAlign: "center"}}>
      <h1>About Us</h1>
      <p>We are a team of passionate developers who love creating awesome web applications. Our mission is to make the world a better place through technology.</p>
      <p>For more information, please contact us at <a href="mailto:contact@mycompany.com">contact@mycompany.com</a>.</p>
    </div>
    <footer>
      <p className='footer'>
        React App 2023
      </p>
    </footer>
    </>
    
  );
}

export default AboutPage;
