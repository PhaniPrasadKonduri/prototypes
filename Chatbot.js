import React, { useState } from 'react';
import './Chatbot.css'; // Separate CSS for Chatbot

function Chatbot() {
    const [messages, setMessages] = useState([]);
    const [inputValue, setInputValue] = useState('');

    const handleSendMessage = () => {
        if (inputValue.trim()) {
            const newUserMessage = { text: inputValue, sender: 'user' };
            setMessages([...messages, newUserMessage]);
            // In a real application, send the message to a backend chatbot service
            // and update messages with the bot's response
            setTimeout(() => {
                const botResponse = { text: `Thanks for your query: "${inputValue}". I'm still under development and will get back to you soon!`, sender: 'bot' };
                setMessages([...messages, newUserMessage, botResponse]);
            }, 1000);
            setInputValue('');
        }
    };

    return (
        <div className="chatbot-container">
            <h3>Procurement Assistant</h3>
            <div className="messages-container">
                {messages.map((msg, index) => (
                    <div key={index} className={`message ${msg.sender}`}>
                        {msg.text}
                    </div>
                ))}
            </div>
            <div className="input-area">
                <input
                    type="text"
                    value={inputValue}
                    onChange={(e) => setInputValue(e.target.value)}
                    placeholder="Ask me anything..."
                />
                <button onClick={handleSendMessage}>Send</button>
            </div>
        </div>
    );
}

export default Chatbot;