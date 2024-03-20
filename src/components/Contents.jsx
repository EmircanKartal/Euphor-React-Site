import React, { useEffect } from "react";

const Contents = () => {
  useEffect(() => {
    // Function to load the Elfsight script
    const loadScript = () => {
      const script = document.createElement("script");
      script.src = "https://static.elfsight.com/platform/platform.js";
      script.defer = true;
      script.setAttribute("data-use-service-core", "");
      document.body.appendChild(script);
    };

    // Call the function to load the script
    loadScript();

    // Optional: Cleanup function to remove the script when the component unmounts
    return () => {
      // Find the script by its src attribute and remove it if found
      const loadedScript = document.querySelector(
        'script[src="https://static.elfsight.com/platform/platform.js"]'
      );
      if (loadedScript) {
        document.body.removeChild(loadedScript);
      }
    };
  }, []); // Empty dependency array means this effect runs once on mount

  return (
    <div name="content" className="w-full text-gray-300 bg-[#0a192f]">
      <div className="max-w-[1000px] mx-auto p-4 flex flex-col justify-center">
        <div className="mt-32 mb-8">
          {" "}
          {/* Adjust margin-top here to push content more below */}
          <p className="text-4xl font-bold inline border-b-4 text-gray-300 border-pink-600">
            Contents
          </p>
          <p className="py-6">See what's new on our contents</p>
        </div>

        <div
          className="flex items-center justify-center"
          style={{ minHeight: "50vh" }}
        >
          {" "}
          {/* Adjust minimum height */}
          <div className="max-w-[800px] mx-auto mt-10">
            {" "}
            {/* Adjust width and margin-top here */}
            <div
              className="elfsight-app-654470b5-c03b-4430-8292-6c83a00a4981"
              data-elfsight-app-lazy
            ></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contents;
