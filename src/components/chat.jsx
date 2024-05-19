import React, { useState } from "react";
import { FaRobot } from "react-icons/fa6";

const Chat = () => {
  const [isChatOpen, setIsChatOpen] = useState(false);
  const [message, setMessage] = useState("");
  const [chatMessages, setChatMessages] = useState([]);

  const toggleChat = () => {
    setIsChatOpen(!isChatOpen);
  };

  const handleSendMessage = (e) => {
    e.preventDefault();
    if (message.trim()) {
      setChatMessages([...chatMessages, message]);
      setMessage("");
    }
  };

  return (
    <>
      <div
        className="fixed bottom-5 right-5 bg-black hover:bg-purple-500 text-white font-bold py-4 px-6 rounded-full shadow-lg cursor-pointer"
        onClick={toggleChat}
      >
        <FaRobot />
      </div>
      {isChatOpen && (
        <div className="fixed bottom-20 right-5 bg-white p-4 rounded-lg shadow-lg w-80 h-96 flex flex-col justify-between">
          <div className="flex justify-between items-center mb-2">
            <h2 className="text-xl font-bold">Chat Bot</h2>
            <button className="text-red-500 font-bold" onClick={toggleChat}>
              X
            </button>
          </div>
          <div className="chat-content mb-4 overflow-y-auto h-64">
            {chatMessages.map((msg, index) => (
              <div key={index} className="mb-2">
                <div className="bg-gray-200 p-2 rounded">{msg}</div>
              </div>
            ))}
          </div>
          <form onSubmit={handleSendMessage} className="flex">
            <input
              type="text"
              className="border border-gray-300 p-2 flex-grow rounded-l"
              placeholder="Type your message..."
              value={message}
              onChange={(e) => setMessage(e.target.value)}
            />
            <button
              type="submit"
              className="bg-blue-500 text-white p-2 rounded-r"
            >
              Send
            </button>
          </form>
        </div>
      )}
    </>
  );
};

export default Chat;
