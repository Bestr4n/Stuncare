import React, { useState, useEffect } from "react";
import axios from "axios";

const Chat = () => {
  const [isChatOpen, setIsChatOpen] = useState(true);
  const [message, setMessage] = useState("");
  const [chatMessages, setChatMessages] = useState([]);
  const [sessionId, setSessionId] = useState("");

  useEffect(() => {
    // Load Watson Assistant script
    window.watsonAssistantChatOptions = {
      integrationID: "b059d1c1-8ab4-4ea5-b3d0-7be8d3386633", // The ID of this integration.
      region: "au-syd", // The region your integration is hosted in.
      serviceInstanceID: "372721f1-5b08-44f1-90ac-017a23233a7c", // The ID of your service instance.
      onLoad: async (instance) => {
        await instance.render();
      },
    };
    setTimeout(function () {
      const t = document.createElement("script");
      t.src =
        "https://web-chat.global.assistant.watson.appdomain.cloud/versions/" +
        (window.watsonAssistantChatOptions.clientVersion || "latest") +
        "/WatsonAssistantChatEntry.js";
      document.head.appendChild(t);
    });

    // Get session ID
    const getSessionId = async () => {
      try {
        const response = await axios.post(
          "https://api.au-syd.assistant.watson.cloud.ibm.com/instances/372721f1-5b08-44f1-90ac-017a23233a7c/v2/assistants/b059d1c1-8ab4-4ea5-b3d0-7be8d3386633/sessions?version=2021-06-14",
          {},
          {
            headers: {
              "Content-Type": "application/json",
              Authorization: "Bearer {your_token_here}", // Replace with your actual token
            },
          }
        );
        setSessionId(response.data.session_id);
      } catch (error) {
        console.error("Error getting session ID:", error);
      }
    };

    getSessionId();
  }, []);

  const handleSendMessage = async (e) => {
    e.preventDefault();
    if (message.trim()) {
      setChatMessages([...chatMessages, { sender: "user", text: message }]);
      setMessage("");

      try {
        const response = await axios.post(
          `https://api.au-syd.assistant.watson.cloud.ibm.com/instances/372721f1-5b08-44f1-90ac-017a23233a7c/v2/assistants/b059d1c1-8ab4-4ea5-b3d0-7be8d3386633/sessions/${sessionId}/message?version=2021-06-14`,
          {
            input: {
              text: message,
            },
          },
          {
            headers: {
              "Content-Type": "application/json",
              Authorization: "Bearer {your_token_here}", // Replace with your actual token
            },
          }
        );

        if (response.data.output.generic) {
          const botReply = response.data.output.generic[0].text;
          setChatMessages((prevMessages) => [
            ...prevMessages,
            { sender: "bot", text: botReply },
          ]);
        }
      } catch (error) {
        console.error("Error sending message:", error);
      }
    }
  };

  return <></>;
};

export default Chat;
