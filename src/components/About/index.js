import React from 'react';
import coverImage from "../../assets/cover/cover-image.jpg";

function About() {
    return(<div>
         <section className="my-5">
             <h1 id="about-me">About Me</h1>
             <img src={coverImage} className="my-2" style={{ width: "100%" }} alt="cover" />
            </section>
    </div>
    );
}

export default About;