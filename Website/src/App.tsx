import React, { useEffect } from "react";
import { Sidebar } from "./components/Sidebar/Sidebar";
import { ChatMessage } from "./components/ChatMessage";
import { ChatInput } from "./components/ChatInput";
import { ChatHeader } from "./components/ChatHeader";
import { useChat } from "./hooks/useChat";
import { Component } from "lucide-react";
import "./styles/glassmorphism.css";

function App() {
  const {
    sessions,
    currentSessionId,
    currentSession,
    isLoading,
    error,
    sendMessage,
    setCurrentSessionId,
    createNewSession,
    deleteSession,
    messageEndRef,
  } = useChat();

  useEffect(() => {
    if (messageEndRef.current) {
      messageEndRef.current.scrollIntoView({ behavior: "smooth" });
    }
  }, [currentSession?.messages]);

  return (
    <div className="flex h-screen overflow-hidden bg-gradient-to-br from-gray-950 via-gray-900 to-gray-950">
      <Sidebar
        sessions={sessions}
        currentSessionId={currentSessionId}
        onNewChat={createNewSession}
        onSelectSession={setCurrentSessionId}
        onDeleteSession={deleteSession}
      />

      <div className="flex-1 flex flex-col p-4 overflow-hidden">
        <ChatHeader />

        <div className="flex-1 glass rounded-3xl p-6 mt-4 overflow-hidden mb-4">
          <div className="h-full overflow-y-auto space-y-4 scrollbar-thin">
            {!currentSession?.messages.length ? (
              <div className="flex flex-col items-center justify-center h-full text-gray-300/60">
                <Component size={48} className="mb-2 text-gray-400" />
                <h2 className="text-xl font-medium mb-2 text-gray-400">Start a conversation with Abstraction</h2>

                <div className="mt-1 text-slate-400 opacity-70">
                <p>• Do not share personal or sensitive information.</p>
                <p>• Avoid analyzing offensive or harmful content.</p>
                <p>• Make sure your social media profiles are public for betteranalysis.
                </p>
                <p>
                  • Results are based on available data, so interpret them
                  responsibly.
                </p>
                </div>
              </div>
            ) : (
              currentSession.messages.map((message, index) => (
                <ChatMessage key={message.id} message={message} />
              ))
            )}
            {error && (
              <div className="p-4 rounded-xl bg-red-500/20 text-red-200 text-center">
                {error}
              </div>
            )}
            <div ref={messageEndRef} />
          </div>
        </div>

        <ChatInput onSend={sendMessage} disabled={isLoading} />
      </div>
    </div>
  );
}

export default App;
