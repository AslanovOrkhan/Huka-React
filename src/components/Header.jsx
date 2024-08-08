import React, {useState} from "react";
import { RiMenu3Fill, RiCloseLargeLine  } from "react-icons/ri";
import { Link } from "react-router-dom";


const Header = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleIcon = () => {
        setIsOpen(!isOpen);
      };
  return (
    <header>
      <Link to="/" className="logo">huka</Link>
      <nav className={`navbar ${isOpen && 'open'}`}>
        <ul>
            <li><Link to="/About">About Us</Link></li>
            <li><Link to="/menu">Menu</Link></li>
            <li><Link to="/venue">Venue</Link></li>
            <li><Link to="/shop">Online Shop</Link></li>
            <li><Link to="/blog">Blog</Link></li>
            <li><Link to="/contact">Contact Us</Link></li>
        </ul>
        <Link to="/" className="bookTable">book a table</Link>
      </nav>
      <div className="toggleBtn" onClick={toggleIcon}>
      {isOpen ? <RiCloseLargeLine className="Icon" /> : <RiMenu3Fill className="Icon" />}
      </div>
    </header>
  );
};

export default Header;
