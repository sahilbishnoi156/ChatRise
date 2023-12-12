"use client";
import { useState } from "react";
import Message from "@/Components/Message";
import {  motion, useAnimate } from "framer-motion";
import { FaPlay } from "react-icons/fa";

export default function Main() {
  // Use States
  const [messages, setMessages] = useState([]);
  const [showDiv, setShowDiv] = useState(false);

  // Framer motion states
  const [screen1Ref, screen1Animate] = useAnimate();
  const [screen2Ref, screen2Animate] = useAnimate();

  // Animation Functions
  const HandleAnimation = () => {
    setTimeout(() => {
      setShowDiv(true);
    }, 500);
    screen1Animate(screen1Ref.current, {
      rotateX: "0deg",
      backgroundColor: "#161A30",
      height: "100vh",
      left: 0,
      width: "100%",
      top: "0",
    });
    setTimeout(() => {
      screen2Animate(
        screen2Ref.current,
        { width: "100%" },
        { duration: 1, ease: [0.83, 0, 0.17, 1] }
      );
    }, 600);
  };
  return (
    <div
      className={`h-full sm:h-screen md:h-screen w-screen flex items-center justify-center overflow-hidden md:flex-row flex-col ${
        showDiv ? "bg-[#22213a] h-full" : "bg-white"
      }`}
    >
      <motion.div
        className="h-[140vh] transition-all duration-500 w-[100vw] relative bg-[#22213a] sm:-left-[49%] sm:-top-[10%] -left-[49%] -top-[250px] sm:rotate-[15deg] rotate-[31deg] flex items-center justify-center "
        ref={screen1Ref}
        transition={{ ease: [0.83, 0, 0.17, 1] }}
      >
        {showDiv && (
          <Message
            setMessages={setMessages}
            messageState={messages}
            screen={1}
          />
        )}
        {!showDiv && (
          <h2 className="text-white sm:text-6xl text-2xl xl:text-6xl sm:-rotate-[15deg] -rotate-[31deg] relative sm:bottom-[5%] bottom-[15%] -right-[20%]">
            WHAT WE DO
          </h2>
        )}
      </motion.div>
      {!showDiv && (
        <FaPlay
          size={80}
          className=" text-green-500 absolute sm:left-[49%] sm:top-[45%] top-[45%] left-[42%] cursor-pointer z-50"
          onClick={() => HandleAnimation()}
        />
      )}
      <motion.div
        className="h-screen w-0 flex items-center justify-center bg-[#161A30]"
        transition={{ duration: 10, ease: [0.83, 0, 0.17, 1] }}
        ref={screen2Ref}
      >
        {showDiv && (
          <Message
            setMessages={setMessages}
            messageState={messages}
            screen={2}
          />
        )}

        {!showDiv && (
          <h2 className="text-[#31304D] text-2xl sm:text-6xl absolute sm:right-[10%] sm:top-[55%] top-[70%] right-[7%] font-extrabold">
            LATEST WORK
          </h2>
        )}
      </motion.div>
    </div>
  );
}
