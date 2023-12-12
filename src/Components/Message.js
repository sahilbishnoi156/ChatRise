import { motion } from "framer-motion";
import { useState, useEffect } from "react";
import { FaStickerMule, FaCat } from "react-icons/fa";
import { IoSend, IoLogoOctocat } from "react-icons/io5";
import { GiAnimalSkull } from "react-icons/gi";
import { GiParrotHead } from "react-icons/gi";

export default function Message({ setMessages, messageState, screen }) {
  const [userText, setUserText] = useState("");

  useEffect(() => {
    const newArray = JSON.parse(localStorage.getItem("messages") || "[]");
    setMessages(newArray);
    console.log(newArray);
  }, []);

  const handleInput = () => {
    if (userText !== "") {
      const userThing = { message: userText, screen: screen };
      // Update state using the functional form of setState
      setMessages((prev) => [...prev, userThing]);

      // Clear userText in the state
      setUserText("");
      // Retrieve messages from localStorage
      const storedMessages = JSON.parse(localStorage.getItem("messages")) || [];

      // Update the stored messages
      const newArray = [...storedMessages, userThing];

      // Save the updated messages to localStorage
      localStorage.setItem("messages", JSON.stringify(newArray));
    }
  };

  const handleClearChat = () => {
    const newArray = messageState.filter(
      (element) => element.screen !== screen
    );
    localStorage.setItem("messages", JSON.stringify(newArray));
    setMessages(newArray);
  };
  return (
    <div
      className={`bg-[#1e2137] text-black text-right h-[90%] 
      ${
        screen === 1 ? "w-[98%] rounded-2xl " : "w-[98%] rounded-2xl "
      } p-2 overflow-scroll relative shrink-0 flex flex-col justify-between`}
    >
      <div className="border-b-2 rounded-2xl border-gray-600 w-full text-white p-2 text-xl text-left flex items-center justify-between h-auto bg-transparent overflow-hidden">
        <div className="flex items-center gap-2">
          <img
            src={`https://picsum.photos/${screen * 2}/${screen * 3}`}
            alt=""
            className="h-6 w-6 rounded-full"
          />
          User {screen}
        </div>
        <div className="mr-2 text-sm cursor-pointer" onClick={handleClearChat}>
          Clear Chat
        </div>
      </div>
      <GiParrotHead
        className="absolute z-10 text-[#a5a5ac] top-[40%] left-[40%] -rotate-45"
        size={40}
      />
      <GiAnimalSkull
        className="absolute z-10 text-[#8c8c94] top-[10%] left-[20%] -rotate-45"
        size={40}
      />
      <FaStickerMule
        className="absolute z-10 text-[#adadba] top-[28%] left-[70%] -rotate-45"
        size={40}
      />
      <IoLogoOctocat
        className="absolute z-10 text-[#8d8d96] top-[68%] left-[25%] -rotate-45"
        size={40}
      />
      <FaCat
        className="absolute z-10 text-[#909097] top-[60%] left-[82%] -rotate-45"
        size={40}
      />
      <div className="h-full z-10 ">
        {messageState?.map((item, index) => {
          return (
            <motion.div
              key={index}
              animate={{ y: 0 }}
              initial={{ y: 30 }}
              transition={{ duration: 0.2, delay: 0.1 }}
              className={`w-full flex  ${
                screen === item.screen ? "justify-end" : ""
              } shrink-0 relative z-50 opacity-[0.8] items-center `}
            >
              <h1
                className={`${
                  item.screen === screen
                    ? "bg-green-700 text-right"
                    : "bg-slate-700 text-left"
                } text-white p-2 px-4 inline-block rounded-2xl my-2 max-w-[90%] text-justify`}
              >
                {item.message}
              </h1>
            </motion.div>
          );
        })}
      </div>
      <label
        htmlFor="message_input"
        className="w-full bg-slate-500 flex items-center justify-center rounded-2xl p-2 shrink-0 z-10 mt-4 h-auto"
      >
        <input
          className="w-full text-[1.25rem] outline-none text-white bg-transparent"
          placeholder="Enter Something"
          id="message_input"
          value={userText}
          onChange={(e) => setUserText(e.target.value)}
          onKeyDown={(e) => {
            if (e.key === "Enter") {
              handleInput();
            }
          }}
        ></input>
        <IoSend
          size={25}
          className="text-white cursor-pointer"
          onClick={handleInput}
        />
      </label>
    </div>
  );
}
