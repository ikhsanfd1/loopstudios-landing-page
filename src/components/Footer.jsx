import React from 'react';

const Footer = () => {
  return (
    <div className="bg-black text-white px-16 py-8">
      <div className="icon-brand flex justify-between items-center">
        <div className="logo">
          <h2 className="tracking-tighter text-2xl font-bold alata-regular">
            loopstudios
          </h2>
        </div>
        <div className="social-media flex gap-4 items-center">
          <span>
            <img src="/public/images/icon-facebook.svg" alt="facebook" />
          </span>
          <span>
            <img src="/public/images/icon-twitter.svg" alt="twitter" />
          </span>
          <span>
            <img src="/public/images/icon-pinterest.svg" alt="pinterest" />
          </span>
          <span>
            <img src="/public/images/icon-instagram.svg" alt="instagram" />
          </span>
        </div>
      </div>
      <div className="back-navbar flex justify-between items-center">
        <div className="navbar-footer">
          <nav className="flex-none">
            <ul className="flex gap-4 alata-regular py-4">
              <li>
                <a>About</a>
              </li>
              <li>
                <a>Careers</a>
              </li>
              <li>
                <a>Events</a>
              </li>
              <li>
                <a>Products</a>
              </li>
              <li>
                <a>Support</a>
              </li>
            </ul>
          </nav>
        </div>
        <div className="copyright dark-gray">
          <p>© 2021 Loopstudios. All rights reserved.</p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
