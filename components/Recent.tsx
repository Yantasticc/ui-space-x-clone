import React from "react";

const Recent = () => {
  return (
    <div className="uppercase w-80 mx-auto mb-10 mt-[250px] ml-[250px] bg-opacity-20 p-5 rounded-lg">
      <p className="text-1xl font-5xl text-white mb-2">Upcoming launch</p>
      <h2 className="text-2xl font-semibold text-white mb-4">Starship's second <br /> flight test</h2>
      <button className="text-xs font-semibold text-white-500 border border-white-500 rounded-10 pt-3 pb-3 py-2 px-6 hover:bg-blue-500 hover:text-black fill-slate-50">
        Learn More
      </button>
    </div>
  );
};

export default Recent;
