import React from 'react';

const About = () => {
  return (
    <div className="px-16">
      <div className="img-interactive pt-12 flex">
        <img
          src="/public/images/desktop/image-interactive.jpg"
          alt=""
          className="w-1/2 rounded-md"
        />
        <div className="text-intractive mt-36 -ms-28 pt-4 px-12 flex flex-col justify-end bg-white">
          <h1 className="text-5xl josefin-sans pt-4 pb-2">
            THE LEADER IN INTERACTIVE VR
          </h1>
          <p className="text-xl text-gray-500 alata-regular">
            Founded in 2011, Loopstudios has been producing world-class virtual
            reality projects for some of the best companies around the globe.
            Our award-winning creations have transformed businesses through
            digital experiences that bind a brand to their vision.{' '}
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;
