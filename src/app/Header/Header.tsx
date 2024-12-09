import React from 'react';

const Header = () => {
  return (
    <div>
      <div className="w-full h-auto bg-[#FBEBB5]">
        {/* Navbar Section */}
        <div className="w-full flex justify-between items-center px-4 md:px-8 lg:px-16 py-4">
          <ul className="text-[#000000] flex gap-x-4 md:gap-x-8 font-medium font-Poppins relative left-[500px] top-[20px]">
            <li className="text-[14px] md:text-[16px]">Home</li>
            <li className="text-[14px] md:text-[16px]">About</li>
            <li className="text-[14px] md:text-[16px]">Shop</li>
            <li className="text-[14px] md:text-[16px]">Contact</li>
          </ul>

          <div className="flex space-x-4 relative right-[400px] top-[20px]">
            <img src="/images/vector1.png" alt="icon" className="w-5 h-5 md:w-6 md:h-6" />
            <img src="/images/vector2.png" alt="icon" className="w-5 h-5 md:w-6 md:h-6" />
            <img src="/images/vector3.png" alt="icon" className="w-5 h-5 md:w-6 md:h-6" />
            <img src="/images/vector4.png" alt="icon" className="w-5 h-5 md:w-6 md:h-6" />
          </div>
        </div>

        {/* Main Content Section */}
        <div className="flex flex-col lg:flex-row items-center justify-between px-4 md:px-8 lg:px-16">
          {/* Text Content */}
          <div className="lg:w-1/2 text-center lg:text-left mt-8 lg:mt-0">
            <h1 className="text-[32px] md:text-[48px] lg:text-[67px] font-Poppins w-[600px] relative left-[200px] leading-[40px] md:leading-[60px] lg:leading-[95px] text-[#000000]">
              Rocket single seater
            </h1>
            <div className="mt-4">
              <h1 className="text-[18px] md:text-[24px] lg:text-[30px] font-Poppins font-medium tracking-normal relative left-[200px]">
                Shop Now
              </h1>
              <div className="w-[100px] h-[2px] bg-[#000000] mt-2 mx-auto lg:mx-0 relative left-[200px]"></div>
            </div>
          </div>

          {/* Image Content */}
          <div className="lg:w-1/2 mt-8 lg:mt-0">
            <img
              src="/images/Sofa.png"
              alt="sofa"
              className="w-full max-w-[500px] md:max-w-[700px] lg:max-w-[853px] h-auto mx-auto"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
