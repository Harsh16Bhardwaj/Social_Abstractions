import React from 'react';
import { Bot, Sparkles } from 'lucide-react';

export const ChatHeader: React.FC = () => {
  return (
    <div className="text-center mb-2 mt-5">
      <h1 className="text-5xl font-medium text-white  flex items-center justify-center gap-3" style={{fontFamily:'Style Script'}}>
        Social Abstraction <Sparkles className="text-teal-400" size={28} />
      </h1>
      <p className="text-blue-200/80 mr-5">Find out what data can do..</p>
    </div>
  );
};