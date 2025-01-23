import React, { useContext, useState } from 'react';
import './header.css';
import { Link } from "react-router-dom";
import { ThemeContext } from '../Content/context';
import { HiSun, HiMoon } from 'react-icons/hi2';
import { FiMenu, FiX } from 'react-icons/fi';

function Header() {
    const { theme, toggleTheme } = useContext(ThemeContext);
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [isOpen,setIsOpen]=useState(false)

    function handleThemeToggle() {
        toggleTheme(theme === 'dark' ? 'light' : 'dark');
    }

    function handleClick(e){
        if(theme==="dark"){
            toggleTheme('light')
        }else{
            toggleTheme('dark')
        }
}
//  const {isDarkMode, togglerDarkMode} =useTheme();
function handleHamClick(){
isOpen?setIsOpen(false): setIsOpen(true)
}
    return (
        <div className={`frame ${theme=="dark"?'dark':'light'}`}>
            <div className="header">
                <div className="logo">
                    <Link to="/" className="link1">
                        <img src="/logonew.jpeg" alt="logo" />
                    </Link>
                </div>
                <div className='container2' style={{ display: 'flex', gap: '20px',flexWrap:"wrap" }}>
                <a 
                href="https://job-portal-beta-dun.vercel.app"
                target="_blank"  // <-- Opens link in a new tab
                rel="noopener noreferrer"  // <-- Added for security
                 className="logo link1" 
                 style={{ padding: 10, margin: 5, height: 30, width: 80 }}>
            <b>Internship</b>
        </a>

        <a href="/about" className="logo link1" style={{ padding: 10, margin: 5, height: 30, width: 80 }}>
            <b>About Us</b>
            </a>

        <a href="/Review" className="logo link1" style={{ padding: 10, margin: 5, height: 30, width: 80 }}>
            <b>Review Us</b>
        </a>

        <a href="/ProfilePage" className="logo link1" style={{ padding: 10, margin: 5, height: 30, width: 80 }}>
            <b>Profile</b>
            </a>

        <a href="/" className="logo link1" style={{ padding: 10, margin: 5, height: 30, width: 40 }}>
            <b>Home</b>
        </a>
       
            
                    {
                        theme === 'dark' ? <HiSun size={"3rem"} onClick={handleClick} style={{ paddingRight: '20px' }} /> : <HiMoon size={"3rem"} onClick={handleClick} style={{ paddingRight: '30px' }} />
                    }
    </div>
    {

theme==='dark'? <HiSun className='mode' size={"3rem"} onClick={handleClick}/>:<HiMoon className='mode' size={"3rem"} onClick={handleClick}/>
} 
        <div class="hamburger" id="hamburger" onClick={handleHamClick}>
                <div></div>
                <div></div>
                <div></div>
            </div>
          {
           isOpen && <div className='elements' style={{zIndex:100}}  >
            <a href="https://job-portal-beta-dun.vercel.app" className="logo link1" style={{ padding: 10, margin: 5, height: 30, width: 80 }}>
                <b>Internship</b>
            </a>
            <a href="/Review" className="logo link1" style={{ padding: 10, margin: 5, height: 30, width: 80 }}>
                <b>Review Us</b>
            </a>
            <a href="/" className="logo link1" style={{ padding: 10, margin: 5, height: 30, width: 40 }}>
                <b>Home</b>
            </a>
            <a href="/about" className="logo link1" style={{ padding: 10, margin: 5, height: 30, width: 80 }}>
                <b>About Us</b>
            </a>
          
            </div>
          }  
    </div>
</div>
    );
}

export default Header;
