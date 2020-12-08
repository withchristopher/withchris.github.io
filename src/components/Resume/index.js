import React from 'react';
import pg1 from '../../assets/resume/pg1.png';
import pg2 from '../../assets/resume/pg2.png';
//import Modal from '../Modal';

function Resume() {
    return(
        <div className="flex-container">
            <img src={pg1} />
            <img src={pg2} />

        </div>
    )
}

export default Resume;