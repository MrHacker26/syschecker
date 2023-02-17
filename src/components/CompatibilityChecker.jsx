import React, { useState } from "react";
import NetworkChecker from "./NetworkChecker";
import { TiTick } from "react-icons/ti";
import { BsFillMicFill } from "react-icons/bs";
import { BiWebcam } from "react-icons/bi";
import { AiOutlineIssuesClose } from "react-icons/ai";

function CompatibilityChecker() {
  const [audio, setAudio] = useState(null);
  const [video, setVideo] = useState(null);

  async function checkAudioCompatibility() {
    try {
      const stream = await navigator.mediaDevices.getUserMedia({ audio: true });
      setAudio(true);
      stream.getTracks().forEach((track) => track.stop());
    } catch (error) {
      setAudio(false);
    }
  }

  async function checkVideoCompatibility() {
    try {
      const stream = await navigator.mediaDevices.getUserMedia({ video: true });
      setVideo(true);
      stream.getTracks().forEach((track) => track.stop());
    } catch (error) {
      setVideo(false);
    }
  }

  return (
    <div>
      <div>
        <div className="flex flex-col">
          <div className="flex gap-1">
            <BsFillMicFill size={23} className="text-black dark:text-white mt-2" />
            <button
              onClick={checkAudioCompatibility}
              className="shadow bg-indigo-500 hover:bg-indigo-400 focus:shadow-outline focus:outline-none text-white font-bold py-2 px-4 rounded-full"
            >
              Check Microphone Compatibility
            </button>
          </div>
          <div className="flex-col text-black dark:text-white pt-1">
            {audio === null ? null : audio ? (
              <p className="flex">
                <TiTick
                  size={23}
                  className="bg-green-600 mr-1 text-white rounded-full "
                />
                Your device supports audio recording.
              </p>
            ) : (
              <p className="flex pt-1">
                <AiOutlineIssuesClose
                  size={23}
                  className="mr-1 text-red-500 rounded-full"
                />
                Your device does not support audio recording.
              </p>
            )}
          </div>
          <br />
        </div>
        <div className="flex-col">
          <div className="flex gap-1">
            <BiWebcam size={23} className="text-black dark:text-white mt-2" />
            <button
              onClick={checkVideoCompatibility}
              className="shadow bg-indigo-500 hover:bg-indigo-400 focus:shadow-outline focus:outline-none text-white font-bold py-2 px-4 rounded-full"
            >
              Check Camera Compatibility
            </button>
          </div>
          <div className="text-black dark:text-white">
            {video === null ? null : video ? (
              <p className="flex pt-1">
                <TiTick
                  size={23}
                  className="bg-green-600 mr-1 text-white rounded-full"
                />
                Your device supports video recording.
              </p>
            ) : (
              <p className="flex pt-1">
                <AiOutlineIssuesClose
                  size={23}
                  className="mr-1 text-red-500 rounded-full"
                />
                Your device does not support video recording.
              </p>
            )}
          </div>
          <br />
          </div>
          <NetworkChecker />
      </div>
    </div>
  );
}

export default CompatibilityChecker;
