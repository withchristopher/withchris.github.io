import React from 'react';
import {
  FaGithubSquare,
  FaMailBulk,
  FaLinkedin
} from "react-icons/fa";
import { IconContext } from "react-icons";

function Footer() {
    return(
      <footer>
        
      <IconContext.Provider
        value={{ className: "icon-color", size: 50 }}
      >
        <div className="wrapper">
          <a href="https://github.com/withchristopher">
          <FaGithubSquare />
          </a>
          <a href="mailto:chris.reviresco@gmail.com">
          <FaMailBulk />
          </a>
          <a href="https://www.linkedin.com/in/chris-maxwell-aa377196/">
          <FaLinkedin />
          </a>
        </div>
      </IconContext.Provider>
    </footer>
      
    )
}

export default Footer;
