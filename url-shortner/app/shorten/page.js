"use client";

import React, { useState } from "react";

const Shorten = () => {
  const [url, seturl] = useState("");
  const [shorturl, setshorturl] = useState("");

  return (
    <div className="mx-4 sm:mx-auto my-10 sm:my-16 w-auto max-w-lg rounded-2xl bg-purple-100 p-5 sm:p-8 shadow-xl shadow-purple-200/50 transition-all duration-300">
      <h1 className="text-center sm:text-left font-bold text-2xl sm:text-3xl text-purple-950">
        Generate your short URLs
      </h1>

      <div className="mt-2 flex flex-col gap-3 sm:gap-4">
        <input
          type="text"
          value={url}
          className="w-full rounded-lg border border-purple-200 bg-white px-4 py-3 text-sm sm:text-base text-purple-950 shadow-sm outline-none transition-all duration-300 placeholder:text-purple-400 focus:border-purple-500 focus:ring-2 focus:ring-purple-300"
          placeholder="Enter your URL"
          onChange={(e) => {
            seturl(e.target.value);
          }}
        />

        <input
          type="text"
          value={shorturl}
          className="w-full rounded-lg border border-purple-200 bg-white px-4 py-3 text-sm sm:text-base text-purple-950 shadow-sm outline-none transition-all duration-300 placeholder:text-purple-400 focus:border-purple-500 focus:ring-2 focus:ring-purple-300"
          placeholder="Enter your preferred short URL text"
          onChange={(e) => {
            setshorturl(e.target.value);
          }}
        />

        <button className="my-2 w-full rounded-lg bg-purple-600 px-4 py-3 font-bold text-white shadow-lg shadow-purple-300 transition-all duration-300 ease-out hover:-translate-y-1 hover:scale-[1.02] hover:bg-purple-700 hover:shadow-xl hover:shadow-purple-400/50 active:translate-y-0 active:scale-95 active:shadow-md focus:outline-none focus:ring-2 focus:ring-purple-400 focus:ring-offset-2">
          Generate
        </button>
      </div>
    </div>
  );
};

export default Shorten;