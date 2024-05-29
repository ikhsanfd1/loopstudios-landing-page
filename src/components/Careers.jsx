import React from 'react';
import dataImage from '../utils/dataImage.json';
const Careers = () => {
  return (
    <div className="careers-container px-16 my-16">
      <div className="careers-header flex justify-between">
        <div className="creations tracking-tighter text-4xl josefin-sans">
          <h2>OUR CREATIONS</h2>
        </div>
        <div className="seeall">
          <button className="text-white bg-black w-28 tracking-widest h-10 rounded-md">
            SEE ALL
          </button>
        </div>
      </div>
      <div className="gambar-creations flex gap-8 flex-wrap justify-between py-8">
        {dataImage.images.map((item, index) => (
          <div key={index}>
            <img src={item.image} alt={item.name} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Careers;
