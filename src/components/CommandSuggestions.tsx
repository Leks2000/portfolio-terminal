import React from 'react';

interface CommandSuggestionsProps {
  onCommandClick: (command: string) => void;
}

const commands = [
  { name: 'help', description: 'Show available commands' },
  { name: 'about', description: 'Information about me' },
  { name: 'projects', description: 'My projects and games' },
  { name: 'socials', description: 'Social media links' },
  { name: 'contacts', description: 'Contact information' },
  { name: 'clear', description: 'Clear terminal screen' }
];

export const CommandSuggestions: React.FC<CommandSuggestionsProps> = ({ onCommandClick }) => {
  return (
    <div className="mt-6 grid grid-cols-2 md:grid-cols-3 gap-3">
      {commands.map((cmd) => (
        <button
          key={cmd.name}
          onClick={() => onCommandClick(cmd.name)}
          className="clickable-command p-2 rounded border border-terminal-purple/30 bg-terminal-bg hover:bg-terminal-purple/10 transition-all duration-200 text-left"
        >
          <div className="font-semibold text-terminal-blue">{cmd.name}</div>
          <div className="text-xs text-terminal-fg/70 mt-1">{cmd.description}</div>
        </button>
      ))}
    </div>
  );
};