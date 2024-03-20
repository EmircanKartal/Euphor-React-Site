import React from "react";
import { HiArrowNarrowRight } from "react-icons/hi";

const Home = () => {
  return (
    <div name="home" className="w-full h-screen bg-[#0a192f]">
      {/* Container */}
      <div className="max-w-[1000px] mx-auto px-8 flex flex-col justify-center h-full">
        <p className="text-pink-600">Hi! We are</p>
        <h1 className="text-4xl sm:text-7xl font-bold text-[#ccd6f6]">
          Euphor
        </h1>
        <h2 className="text-4xl sm:text-7xl font-bold text-[#8892b0]">
          A dynamic trio passionate about producing content
        </h2>
        <p className="text-[#8892b0] py-4 max-w-[700px]">
          On Science, Tech, Society, Philosophy, Entrepreneurship, and Internet
          Culture. Our podcast brings these topics to life through entertaining
          discussions, ranging from daily experiences to meticulously researched
          subjects.
        </p>
        <div>
          <a
            href="/contents"
            className="text-white group border-2 px-5 py-3 my-5 flex items-center hover:bg-pink-600 hover:border-pink-600 whitespace-nowrap"
            style={{ width: "fit-content" }}
          >
            <button className="flex items-center justify-center">
              View What We Do
              <HiArrowNarrowRight className="ml-2 w-6 h-6" />
            </button>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Home;
