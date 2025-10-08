import React from 'react';
import type { TerminalLine as TerminalLineType } from '../types/terminal';
import { TypewriterText } from './TypewriterText';

interface TerminalLineProps {
  line: TerminalLineType;
  animate?: boolean;
}

export const TerminalLine: React.FC<TerminalLineProps> = ({ line, animate = false }) => {
  const renderContent = () => {
    // Обработка ссылок в тексте
    const processLinks = (text: string) => {
      const urlRegex = /(https?:\/\/[^\s]+)/g;
      const parts = text.split(urlRegex);
      
      return parts.map((part, index) => {
        if (urlRegex.test(part)) {
          return (
            <a
              key={index}
              href={part}
              target="_blank"
              rel="noopener noreferrer"
              className="terminal-link"
            >
              {part}
            </a>
          );
        }
        return part;
      });
    };

    const content = processLinks(line.content);
    
    if (animate) {
      return <TypewriterText text={line.content} className={getLineClass(line.type)} />;
    }

    return <span className={getLineClass(line.type)}>{content}</span>;
  };

  const getLineClass = (type: TerminalLineType['type']) => {
    switch (type) {
      case 'prompt':
        return 'terminal-prompt';
      case 'command':
        return 'terminal-command';
      case 'output':
        return 'terminal-output';
      case 'system':
        return 'text-terminal-green';
      default:
        return 'terminal-output';
    }
  };

  return (
    <div className={`terminal-line animate-fadeIn ${getLineClass(line.type)}`}>
      {renderContent()}
    </div>
  );
};