import React from 'react';

function Modal({onClose, currentPhoto}) {
  const {name, category, description, index, website} = currentPhoto;

    return (
        <div className="modalBackdrop">
        <div className="modalContainer">
          <h3 className="modalTitle">{name}</h3>
          <img src={require(`../../assets/small/${category}/${index+1}.png`)} alt="current category" />
          <p>
            {description}
          </p>
          <div className="flex-container">
          <button onClick={()=> window.open(website, "_blank")} type="button" className="button">View Website</button>
          <button onClick={onClose} type="button">
            Close this modal
          </button>
          </div>
          
        </div>
      </div>
    );
  }
  
  export default Modal;