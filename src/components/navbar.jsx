import { useState, useEffect } from "react";

const Navbar = ({ currentMenu, setCurrentMenu }) => {
    const [scrolled, setScrolled] = useState(false);
    const [prevY, setPrevY] = useState(0)

    useEffect(() => {
        const handleScroll = () => {
          if (window.scrollY > prevY) {
            setScrolled(true);
          } else {
            setScrolled(false);
          }
          setPrevY(window.scrollY)

        };
    
        window.addEventListener('scroll', handleScroll);
    
        return () => {
          window.removeEventListener('scroll', handleScroll);
        };
      }, [prevY]);

    useEffect(() => {
        document.querySelector('li.active')?.classList.remove('active')
        document.getElementById(currentMenu)?.classList.add('active')
    }, [currentMenu])

  return (
    <div className={`navbar ${scrolled ? 'scrolled' : ''}`}>
      <div className="logo">
        <img
          src="https://suitmedia.com/_nuxt/img/logo-white.081d3ce.png"
          height={55}
          alt=""
        />
      </div>
      <ul className="menu">
        <li id="Work" onClick={()=>{setCurrentMenu("Work")}}>Work</li>
        <li id="About" onClick={()=>{setCurrentMenu("About")}}>About</li>
        <li id="Services" onClick={()=>{setCurrentMenu("Services")}}>Services</li>
        <li id="Ideas" onClick={()=>{setCurrentMenu("Ideas")}}>Ideas</li>
        <li id="Careers" onClick={()=>{setCurrentMenu("Careers")}}>Careers</li>
        <li id="Contact" onClick={()=>{setCurrentMenu("Contact")}}>Contact</li>
      </ul>
    </div>
  );
};

export default Navbar;
