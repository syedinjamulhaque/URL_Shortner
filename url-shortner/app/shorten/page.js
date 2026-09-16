"use client";

import Link from "next/link";
import React, { useState } from "react";

const Shorten = () => {
  const [url, seturl] = useState("");
  const [shorturl, setshorturl] = useState("");
  const [generated, setGenerated] = useState("");
  const [copied, setCopied] = useState(false);

  const generate = () => {
    if (!url.trim() || !shorturl.trim()) {
      alert("Please fill in both fields.");
      return;
    }

    const myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");

    const raw = JSON.stringify({
      url: url.trim(),
      shorturl: shorturl.trim(),
    });

    const requestOptions = {
      method: "POST",
      headers: myHeaders,
      body: raw,
      redirect: "follow",
    };

    fetch("/api/generate", requestOptions)
      .then((response) => response.json())
      .then((result) => {
        const host = process.env.NEXT_PUBLIC_HOST?.replace(/\/$/, "");
        setGenerated(`${host}/${shorturl}`);
        seturl("");
        setshorturl("");
        setCopied(false);
        console.log(result);
        alert(result.message);
      })
      .catch((error) => console.error(error));
  };

  const copyToClipboard = () => {
    navigator.clipboard.writeText(generated);
    setCopied(true);
    setTimeout(() => setCopied(false), 1500);
  };

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

        <button
          onClick={generate}
          disabled={!url.trim() || !shorturl.trim()}
          className="my-2 w-full rounded-lg bg-purple-600 px-4 py-3 font-bold text-white shadow-lg shadow-purple-300 transition-all duration-300 ease-out hover:-translate-y-1 hover:scale-[1.02] hover:bg-purple-700 hover:shadow-xl hover:shadow-purple-400/50 active:translate-y-0 active:scale-95 active:shadow-md focus:outline-none focus:ring-2 focus:ring-purple-400 focus:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:translate-y-0 disabled:hover:scale-100 disabled:hover:shadow-lg"
        >
          Generate
        </button>
      </div>

      {generated && (
        <div className="mt-5 animate-in fade-in slide-in-from-top-2 duration-300 rounded-xl border border-purple-200 bg-white p-4 shadow-sm">
          <span className="mb-2 block text-xs font-semibold uppercase tracking-wide text-purple-500">
            Your Link
          </span>
          <div className="flex items-center justify-between gap-3 rounded-lg bg-purple-50 px-3 py-2.5">
            <Link
              target="_blank"
              href={generated}
              className="truncate text-sm font-medium text-purple-700 underline decoration-purple-300 underline-offset-2 hover:text-purple-900"
            >
              {generated}
            </Link>
            <button
              onClick={copyToClipboard}
              className="shrink-0 rounded-md bg-purple-600 px-3 py-1.5 text-xs font-semibold text-white transition-all duration-200 hover:bg-purple-700 active:scale-95"
            >
              {copied ? "Copied!" : "Copy"}
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Shorten;