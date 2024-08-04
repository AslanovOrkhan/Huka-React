import React, {useState} from "react";
import { RiMenu3Fill, RiCloseLargeLine  } from "react-icons/ri";


const Header = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleIcon = () => {
        setIsOpen(!isOpen);
      };
  return (
    <header>
      <h1 className="logo">huka</h1>
      <nav className={`navbar ${isOpen && 'open'}`}>
        <ul>
            <li><a href="#">About Us</a></li>
            <li><a href="#">Menu</a></li>
            <li><a href="#">Venue</a></li>
            <li><a href="#">Online Shop</a></li>
            <li><a href="#">Blog</a></li>
            <li><a href="#">Contact Us</a></li>
        </ul>
      </nav>
      <div className="toggleBtn" onClick={toggleIcon}>
      {isOpen ? <RiCloseLargeLine className="Icon" /> : <RiMenu3Fill className="Icon" />}
      </div>
    </header>
  );
};

export default Header;
