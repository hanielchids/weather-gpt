import React from "react";
import { SunIcon } from "@heroicons/react/solid";

function Loading() {
  return (
    <div className="bg-gradient-to-br from-[#394F68] to-[#183B7B] text-white p-10">
      <SunIcon
        className="h-24 y-24 animate-bounce text-yellow-500"
        color="yellow"
      />
      <h1 className="text-6xl font-bold text-center mb-10 animate-pulse">
        Loading City Weather Information
      </h1>
      <h2>Fetching weather and an AI summary!</h2>
    </div>
  );
}

export default Loading;
