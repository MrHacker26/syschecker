import React, { useState } from "react";
import { TiTick } from "react-icons/ti";
import { MdNetworkCheck } from "react-icons/md";
import { AiOutlineIssuesClose } from "react-icons/ai";

function NetworkChecker() {
  const [speed, setSpeed] = useState(null);

  function checkNetworkSpeed() {
    const connection = navigator.connection;
    if (connection) {
      setSpeed(connection.downlink);
    }
  }

  return (
    <div>
      <div className="flex-col">
      <div className="flex gap-1">
        <MdNetworkCheck size={23} className="text-black dark:text-white mt-2" />
        <button
          onClick={checkNetworkSpeed}
          className="shadow bg-indigo-500 hover:bg-indigo-400 focus:shadow-outline focus:outline-none text-white font-bold py-2 px-4 rounded-full"
        >
          Check Network Speed
        </button>
        </div>
        <div className="text-black dark:text-white">
        {speed === null ? null : speed >= 5 ? (
          <div className="flex mt-1">
            <TiTick
              size={23}
              className="bg-green-600 mr-1 text-white rounded-full"
            /> <p className="w-[300px]">
            Your network speed ({speed} Mbps) is compatible with our
            application.
            </p>
          </div>
        ) : (
            <div className="flex  pt-1">
            <AiOutlineIssuesClose size={23} className="mr-1 text-red-500 rounded-full"/><p className="w-[300px]"> Your network speed ({speed} Mbps) is not compatible with our
            application.</p>
          </div>
        )}
        </div>
      </div>
    </div>
  );
}

export default NetworkChecker;
