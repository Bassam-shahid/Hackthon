import React from "react";

const List = () => {
  return (
    <div>
      {/* Header Section */}
      <div className="bg-[#FAF4F4] w-full min-h-[800px]">
        <div className="flex flex-wrap justify-center gap-8 pt-10">
          <img
            src="/images/Table.png"
            alt="Table"
            className="w-full sm:w-[300px] lg:w-[500px] object-contain"
          />
          <img
            src="/images/CloudSofa.png"
            alt="Sofa"
            className="w-full sm:w-[300px] lg:w-[500px] object-contain"
          />
        </div>

        <div className="flex justify-center gap-20 mt-10">
          <h1 className="text-[24px] sm:text-[30px] lg:text-[36px] font-semibold">
            Side Table
          </h1>
          <h1 className="text-[24px] sm:text-[30px] lg:text-[36px] font-semibold">
            Side Table
          </h1>
        </div>

        <div className="flex justify-center gap-20 mt-4">
          <h1 className="text-[16px] sm:text-[20px] lg:text-[24px] text-black cursor-pointer">
            View More
          </h1>
          <h1 className="text-[16px] sm:text-[20px] lg:text-[24px] text-black cursor-pointer">
            View More
          </h1>
        </div>
        <div className="flex justify-center gap-20 mt-2">
          <div className="w-[50px] sm:w-[100px] h-[2px] bg-black"></div>
          <div className="w-[50px] sm:w-[100px] h-[2px] bg-black"></div>
        </div>
      </div>

      {/* Second Section */}
      <div className="bg-white w-full py-10">
        <div className="flex flex-wrap justify-center gap-6">
          <img src="/images/Group1.png" alt="" className="w-[150px] sm:w-[250px]" />
          <img src="/images/Group2.png" alt="" className="w-[150px] sm:w-[250px]" />
          <img src="/images/Group3.png" alt="" className="w-[150px] sm:w-[250px]" />
          <img src="/images/Group4.png" alt="" className="w-[150px] sm:w-[250px]" />
        </div>
        <div className="flex justify-center mt-6">
          <h1 className="text-[16px] sm:text-[20px] lg:text-[24px] cursor-pointer">
            View More
          </h1>
        </div>
      </div>

      {/* New Arrivals Section */}
      <div className="w-full bg-[#FFF9E5] py-10 flex flex-wrap justify-center items-center">
        <img
          src="/images/Asgaardsofa.png"
          alt=""
          className="w-[300px] sm:w-[600px] lg:w-[800px]"
        />
        <div className="text-center mt-8 lg:mt-0 lg:ml-10">
          <h1 className="text-[20px] lg:text-[24px]">New Arrivals</h1>
          <h2 className="text-[28px] sm:text-[36px] lg:text-[48px] font-bold mt-4">
            Asgaard Sofa
          </h2>
          <button className="mt-6 px-6 py-2 border border-gray-500 text-[16px] lg:text-[20px]">
            Order Now
          </button>
        </div>
      </div>

      {/* Blog Section */}
      <div className="bg-white py-10">
        <div className="text-center">
          <h1 className="text-[24px] lg:text-[36px] font-bold">Our Blogs</h1>
          <p className="text-gray-500 text-sm sm:text-base mt-2">
            Find a bright idea to suit your taste with our great selection
          </p>
        </div>
        <div className="flex flex-wrap justify-center gap-6 mt-8">
          <img src="/images/Rectangle1.png" alt="" className="w-[300px]" />
          <img src="/images/Rectangle2.png" alt="" className="w-[300px]" />
          <img src="/images/Rectangle3.png" alt="" className="w-[300px]" />
        </div>
      </div>

      {/* Footer */}
      <footer className="bg-white text-gray-600 py-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            <div>
              <p className="text-sm">
                400 University Drive Suite 200 Coral Gables, FL 33134 USA
              </p>
            </div>
            <div>
              <h4 className="text-gray-500 mb-4">Links</h4>
              <ul>
                <li className="hover:text-gray-900">Home</li>
                <li className="hover:text-gray-900">Shop</li>
                <li className="hover:text-gray-900">About</li>
                <li className="hover:text-gray-900">Contact</li>
              </ul>
            </div>
            <div>
              <h4 className="text-gray-500 mb-4">Help</h4>
              <ul>
                <li className="hover:text-gray-900">Payment Options</li>
                <li className="hover:text-gray-900">Returns</li>
                <li className="hover:text-gray-900">Privacy Policies</li>
              </ul>
            </div>
            <div>
              <h4 className="text-gray-500 mb-4">Newsletter</h4>
              <form className="flex flex-col gap-4">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="border px-4 py-2"
                />
                <button type="submit" className="bg-black text-white px-4 py-2">
                  Subscribe
                </button>
              </form>
            </div>
          </div>
        </div>
        <p className="text-center text-sm mt-10">
          © 2022 Meubel House. All rights reserved.
        </p>
      </footer>
    </div>
  );
};

export default List;
