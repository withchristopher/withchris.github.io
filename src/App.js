import React, { useState } from 'react';
import './App.css';
import Nav from './components/Nav/index';
import Gallery from './components/Gallery/index';
import ContactForm from './components/Contact/index';
import Footer from './components/Footer/index';

function App() {
    const [contactSelected, setContactSelected] = useState(false);
    const [categories] = useState([
        {
            name: 'about',
            description: `Chris is a MERN fullstack developer. He has experience with designing technology solutions for a variety of applications, organisations and people. Previously, he was employed by Cisco as a systems engineer for 3 years to design networking solutions and build relationships with technical teams in financial services, government, enterprise and small & medium businesses. Prior to Cisco, Chris project managed Corporate Socal Responsibility (CSR) project's for Jaguar Land Rover and Bloodhound SSC, a moonshot project to break the world land speed record. He actively drove STEM adoption in schools which also included technology to schools and universities around South Africa. Chris holds a BSc Honours Degree in Physics (UKZN) and a BSc Degree in Mathematics & Physics(RU) as well as Cisco CCNP certifications in Security and Enterprise Networking.`
        },
        {
          name: 'portfolio',
          description: 'A list of working web application deployed as on GitHub Pages OR Heroku',
        },
        { name: 'resume',
          description: 'Download a copy of my resume here:',
        },
      ]);
      
    const [currentCategory, setCurrentCategory] = useState(categories[0]);

    const ColoredLine = ({ color }) => (
        <hr
            style={{
                color: color,
                backgroundColor: color,
                height: 5
            }}
        />
      );
      
    return (
        <div>
            <Nav
                categories={categories}
                setCurrentCategory={setCurrentCategory}
                currentCategory={currentCategory}
                contactSelected={contactSelected}
                setContactSelected={setContactSelected}
            ></Nav>
            <main>
                {!contactSelected ? (
                    <>
                    <Gallery currentCategory={currentCategory}></Gallery>
                    </>
                ) : (
                    <>
                    <ContactForm/>
                    </>
                )}
                <ColoredLine color="var(--secondary)" />
                 <Footer />
            </main>
           
        </div>
    );

}

export default App;