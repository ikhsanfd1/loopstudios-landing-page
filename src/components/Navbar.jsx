import React, { useEffect, useState } from 'react';

const Navbar = () => {
  const [isHamburgerMenuOpen, setIsHamburgerMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeTab, setActiveTab] = useState('hero');

  const toggleHamburgerMenu = (event) => {
    event.preventDefault();
    event.stopPropagation();
    setIsHamburgerMenuOpen((prev) => !prev);
  };

  const closeHamburgerMenu = () => {
    setIsHamburgerMenuOpen(false);
  };

  const handleScroll = () => {
    setScrolled(window.scrollY > 100);
    const sections = document.querySelectorAll('section');
    const scrollPos = window.scrollY + 100;

    sections.forEach((section) => {
      if (
        section.offsetTop <= scrollPos &&
        section.offsetTop + section.offsetHeight > scrollPos
      ) {
        setActiveTab(section.getAttribute('id'));
      }
    });
  };

  useEffect(() => {
    document.addEventListener('click', closeHamburgerMenu);
    window.addEventListener('scroll', handleScroll);

    return () => {
      document.removeEventListener('click', closeHamburgerMenu);
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);
  return (
    <header className={`navbar -ml-7 -mt-4 ${scrolled ? 'scrolled' : ''}`}>
      <div className="navbar text-white">
        <div className="flex-1">
          <a className="btn btn-ghost tracking-tighter text-4xl font-bold alata-regular">
            loopstudios
          </a>
        </div>
        <div className="flex-none">
          <a
            className="hmb-toggle text-3xl"
            href="#"
            onClick={toggleHamburgerMenu}
          >
            ☰
          </a>
          <nav className="flex-none">
            <ul className={`flex items-center py-4 px-1 pe-20 gap-12 text-lg alata-regular ${isHamburgerMenuOpen ? 'slide' : ''}`}>
            <li>
                <a href="#hero" className={`tab text-white text-lg ${activeTab === 'hero' ? 'border-b-2 rounded-none border-white' : ''}`} onClick={() => setActiveTab('hero')}>Products</a>
              </li>
              <li>
                <a href="#about" className={`tab text-white text-lg ${activeTab === 'about' ? 'border-b-2 rounded-none border-white' : ''}`} onClick={() => setActiveTab('home')}>About</a>
              </li>
              <li>
                <a href="#careers" className={`tab text-white text-lg ${activeTab === 'careers' ? 'border-b-2 rounded-none border-white' : ''}`} onClick={() => setActiveTab('careers')}>Careers</a>
              </li>
              <li>
                <a>Events</a>
              </li>
          
              <li>
                <a>Support</a>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
