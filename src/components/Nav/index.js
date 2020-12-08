import React, { useEffect } from "react";
import { capitalizeFirstLetter } from "../../utils/helpers";


function Nav(props) {
    const {
        categories = [],
        setCurrentCategory,
        currentCategory,
        contactSelected,
        setContactSelected
    } = props;

    useEffect(() => {
        document.title = capitalizeFirstLetter(currentCategory.name);
    }, [currentCategory]);
    

  return (
    <header className="flex-row px-1">
      <h2 className="mx-2">
        <a data-testid="link" href="/">
        
          <span role="" aria-label="developer profile" >
          </span> {" "} 🏠
          {" "}
          Chris Maxwell
        </a>
      </h2>
      
      <nav>
        <ul className="flex-row">
          {categories.map((category) => (
              <li
              className={`mx-1 ${
                currentCategory.name === category.name && !contactSelected && `navActive`
                }`}
              key={category.name}
            >
              <span
                onClick={() => {
                  setCurrentCategory(category);
                  setContactSelected(false);
                }}
              >
                {capitalizeFirstLetter(category.name)}
              </span>
            </li>
          ))}
          <li>
            <span onClick={() => setContactSelected(true)}>Contact</span>
          </li>
          
        </ul>
      </nav>
    </header>
  );
}

export default Nav;