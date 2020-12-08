import React, { useState } from 'react';
import Modal from '../Modal';

const PhotoList = ({ category }) => {

  const [photos] = useState([
    {
      id:0,
      name: 'Chris Maxwell Profile',
      category: 'about',
      description: 'This is a link to my own profile webpage built with React.',
      website:"https://withchristopher.github.io/"
    },
    {
      id:1,
      name: 'Run Buddy',
      category: 'portfolio',
      description: 'Running Club Website with a simple HTML/CSS mockup',
      website:"https://withchristopher.github.io/lock-down/"
    },
    {
      id:2,
      name: 'Password Generator',
      category: 'portfolio',
      description: 'Password generator tool which will generate a password that uses Math.random() function. Criteria include: minimum 8, maximum 128 characters which can be a mix of lowercase, uppercase and special characters',
      website:"https://withchristopher.github.io/securepassword/"
    },
    {
      id:3,
      name: 'Gladiator Robot Game',
      category: 'portfolio',
      description: 'Javascript Gladiator game which prompts the user to make battle and health decisions based on opponent choice and money.',
      website:"https://withchristopher.github.io/javascriptgame/"
    },
    {
      id:4,
      name: 'Wikipedia Web Scrape',
      category: 'portfolio',
      description: 'Python script which prompts the user for a wikipedia page url to scrape tablulated data.',
    },
    {
      id:5,
      name: 'Python Tools',
      category: 'portfolio',
      description: 'A set of python scripts to find Flights / OAuth / Webex API',
      website:"https://github.com/withchristopher/core-python"
    },
    {
      id:6,
      name: 'Workday Scheduler',
      category: 'portfolio',
      description: 'A simple calendar application that allows a user to save events for each hour of the day. This app will run in the browser and feature dynamically updated HTML and CSS powered by jQuery.',
      website:"https://withchristopher.github.io/schedule-tasks/"
    },
    {
      id:7,
      name: 'Git it Together',
      category: 'portfolio',
      description: 'A GitHub repo query site that enables you to query any GitHub username for their repositories. Added features are to query by language and open/closed issues.',
      website:'https://withchristopher.github.io/git-it-together/'
    },
    {
      id:8,
      name: 'Weather Dashbaord',
      category: 'portfolio',
      description: 'A weather dashboard that will run in the browser and feature dynamically updated HTML and CSS',
      website:"https://withchristopher.github.io/weather-dashboard-for-all/"
    },
    {
      id:9,
      name: 'Kanban Table - homemade Trello-Board',
      category: 'portfolio',
      description: 'Completed Kanban Board for your use of tasks, built using HMTL/CSS/JS',
      website:'https://withchristopher.github.io/kanban/'
    },
    {
      id:10,
      name: 'Task creater professional',
      category: 'portfolio',
      description: 'A Task creator for professional use',
      website:'https://withchristopher.github.io/pro-task-creator/'
    },
    {
      id:11,
      name: 'Javascript Quiz',
      category: 'portfolio',
      description: 'A fun quizz game built with Javascript',
      website:'https://withchristopher.github.io/quizzackle/'
    },
    {
      id:12,
      name: 'First profile page',
      category: 'portfolio',
      description: 'A portfolio page I built in the beginning of my fullstack web development course',
      website:'https://withchristopher.github.io/'

    },
    {
      id:13,
      name:'Note Taker',
      category:'portfolio',
      description:'A Note taking application for meetings',
      website:'https://young-chamber-66711.herokuapp.com/notes'
    },
    {
      id:14,
      name:'Zootopia',
      category:'portfolio',
      description:'Zootopia is a web server application using the Express.js framework which hosts a local zoo animal inventory.',
      website:'https://murmuring-shore-39188.herokuapp.com/'
    },
    {
      id:15,
      name:'Pizza Building Application',
      category:'portfolio',
      description:'Create your own pizza by adding toppings, selecting a size and naming your beautiful creation.',
      website:'https://glacial-savannah-38424.herokuapp.com/'
    },
    {
      id:16,
      name:'Budget tracking application (PWA)',
      category:'portfolio',
      description:'A Progressive Web Application (PWA) for tracking home budgets',
      website:'https://enigmatic-refuge-99121.herokuapp.com/'
    },
    {
      id:17,
      name:'Combined the four technologies of the MERN stack (MongoDB, Express.js, React, and Node.js).',
      category:'portfolio',
      description:'Book search application, built using the MERN stack with a graphQL API. Deployed to Heroku.',
      website:'https://search-book-store.herokuapp.com/' 
    },
    {
      id:18,
      name:'eCommerce Shop - MERN Stack with React-Redux',
      category:'portfolio',
      description:'e-commerce platform with an integration with Stripe payment API. Deployed to HerokuWelcome to a e-commerce platform with Stripe payment integration.',
      website:'https://aqueous-eyrie-32041.herokuapp.com/'
    },
    {
      id:19,
      name:'Hackathon For Good Source Good: Redaction Tool',
      category:'portfolio',
      description:'We built a full stack - application and deployed it to Heroku at https://HADEDA-APP.herokuapp.com/ that works with real-world data to solve a real-world challenge, with a focus on user demand:',
      website:'https://github.com/anitapeppercorn/team-chakra'      
    },
    {
      id:20,
      name:'Chris Maxwell Resume',
      category:'resume',
      description:'Download my resume here:',
      website: 'https://docs.google.com/document/d/e/2PACX-1vT4xpPr1dHlTc7BxcAPPzR3_Yp4MrV4TlmwKWRnf2wXbp7jEthLCwWv1RNjtGFXhLAhIgJGo0pnIpK5/pub'
    }
    
  ]);

  const currentPhotos = photos.filter((photo) => photo.category === category);

  const [currentPhoto, setCurrentPhoto] = useState();

  const toggleModal = (image, i) => {
      setCurrentPhoto({...image, index: i});
      setIsModalOpen(!isModelOpen);
  }

  const [isModelOpen, setIsModalOpen] = useState(false);

  return (
    <div>
        {isModelOpen && <Modal currentPhoto={currentPhoto} onClose={toggleModal}  /> }
        <div className="flex-container">
            {currentPhotos.map((image, i) => ( 
            <img
                src={require(`../../assets/small/${category}/${i+1}.png`)}
                alt={image.name}
                className="flex-item mx-2 my-2"
                onClick={() => toggleModal(image, i)}
                key={image.name}
                onMouseOver={image.name}
            />
            ))}
        </div>
    </div>
  );
};

export default PhotoList;