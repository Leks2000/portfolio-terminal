import React from 'react';
import { useTerminal } from '../hooks/useTerminal';
import { TerminalLine } from './TerminalLine';
import { CommandSuggestions } from './CommandSuggestions';

export const Terminal: React.FC = () => {
  const {
    lines,
    currentCommand,
    setCurrentCommand,
    isLoading,
    inputRef,
    terminalRef,
    focusInput,
    handleCommand
  } = useTerminal();

  return (
    <div 
      className="min-h-screen bg-gradient-to-br from-terminal-bg to-gray-900 p-4 cursor-text"
      onClick={focusInput}
    >
      <div className="max-w-4xl mx-auto">
        {/* Terminal Header */}
        <div className="mb-4">
          <div className="bg-gray-800/50 rounded-t-lg px-4 py-2 flex items-center space-x-2">
            <div className="w-3 h-3 bg-red-500 rounded-full"></div>
            <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
            <div className="w-3 h-3 bg-green-500 rounded-full"></div>
            <span className="ml-4 text-terminal-fg/70 text-sm font-mono">
              portfolio-terminal ~ alexander.halle
            </span>
          </div>
          
          {/* Terminal Content */}
          <div 
            ref={terminalRef}
            className="bg-terminal-bg/95 backdrop-blur-sm rounded-b-lg p-6 min-h-[600px] max-h-[80vh] overflow-y-auto border border-gray-700/50 shadow-2xl"
          >
            {/* Terminal Lines */}
            <div className="space-y-1">
              {lines.map((line, index) => (
                <TerminalLine 
                  key={line.id} 
                  line={line} 
                  animate={index === lines.length - 1 && line.type === 'system'}
                />
              ))}
            </div>

            {/* Input Line */}
            {!isLoading && (
              <div className="flex items-center mt-4">
                <span className="terminal-prompt mr-2">{'>'}</span>
                <input
                  ref={inputRef}
                  type="text"
                  value={currentCommand}
                  onChange={(e) => setCurrentCommand(e.target.value)}
                  onKeyDown={(e) => {
                    if (e.key === 'Enter') {
                      handleCommand(currentCommand);
                    }
                  }}
                  className="bg-transparent outline-none text-terminal-fg font-mono flex-1 caret-terminal-purple"
                  placeholder="Type a command..."
                  autoFocus
                />
                <span className="terminal-cursor ml-1">_</span>
              </div>
            )}

            {/* Loading Indicator */}
            {isLoading && (
              <div className="flex items-center mt-4">
                <span className="terminal-prompt mr-2">{'>'}</span>
                <span className="text-terminal-fg">System loading</span>
                <span className="terminal-cursor ml-1">_</span>
              </div>
            )}
          </div>
        </div>

        {/* Command Suggestions */}
        {!isLoading && lines.length > 0 && (
          <div className="mt-6">
            <h3 className="text-terminal-fg/70 text-sm font-mono mb-3">
              Quick Commands:
            </h3>
            <CommandSuggestions onCommandClick={handleCommand} />
          </div>
        )}

        {/* Footer */}
        <div className="mt-8 text-center text-terminal-fg/50 text-xs font-mono">
          <p>Built with React + Tailwind CSS • Inspired by retro terminals</p>
          <p className="mt-1">Press Tab for autocomplete • Use ↑↓ for command history</p>
        </div>
      </div>
    </div>
  );
};