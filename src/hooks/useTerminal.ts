import { useState, useCallback, useRef, useEffect } from 'react';
import type { TerminalLine, CommandName } from '../types/terminal';
import { personalInfo, projects, socialLinks } from '../data/personalData';

export const useTerminal = () => {
  const [lines, setLines] = useState<TerminalLine[]>([]);
  const [currentCommand, setCurrentCommand] = useState('');
  const [commandHistory, setCommandHistory] = useState<string[]>([]);
  const [historyIndex, setHistoryIndex] = useState(-1);
  const [isLoading, setIsLoading] = useState(true);
  const inputRef = useRef<HTMLInputElement>(null);
  const terminalRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = useCallback(() => {
    if (terminalRef.current) {
      terminalRef.current.scrollTop = terminalRef.current.scrollHeight;
    }
  }, []);

  const addLine = useCallback((line: Omit<TerminalLine, 'id' | 'timestamp'>) => {
    const newLine: TerminalLine = {
      ...line,
      id: crypto.randomUUID(),
      timestamp: Date.now(),
    };
    setLines(prev => [...prev, newLine]);
    setTimeout(scrollToBottom, 100);
  }, [scrollToBottom]);

  const executeCommand = useCallback((cmd: string): string => {
    const command = cmd.toLowerCase().trim();
    
    switch (command as CommandName) {
      case 'help':
        return `Available commands:
- about     - Information about me
- projects  - My projects and games
- socials   - Social media links
- contacts  - Contact information
- clear     - Clear terminal screen`;

      case 'about':
        return `${personalInfo.name}
${personalInfo.title}

📍 ${personalInfo.location}
💼 Опыт работы: ${personalInfo.experience}

Создаю игры и приложения под PC и Android.
Работаю с Unity, C#, Shader Graph, Kotlin, .NET и AI-технологиями.
Люблю эксперименты и соединяю геймдев с искусственным интеллектом.

Технические навыки:
${personalInfo.skills.map(skill => `• ${skill}`).join('\n')}`;

      case 'projects':
        const releasedProjects = projects.filter(p => p.status === 'Released');
        const devProjects = projects.filter(p => p.status === 'In development');
        
        let output = '=== 🎮 RELEASED PROJECTS ===\n\n';
        releasedProjects.forEach((project, index) => {
          output += `${index + 1}. ${project.icon} ${project.name}\n`;
          output += `   ${project.description}\n`;
          if (project.links.webgl) output += `   WebGL: ${project.links.webgl}\n`;
          if (project.links.code) output += `   Code: ${project.links.code}\n`;
          if (project.links.android) output += `   Android: ${project.links.android}\n`;
          output += `   Status: ${project.status}\n\n`;
        });

        output += '=== 🚧 IN DEVELOPMENT ===\n\n';
        devProjects.forEach((project, index) => {
          output += `${releasedProjects.length + index + 1}. ${project.icon} ${project.name}\n`;
          output += `   ${project.description}\n`;
          if (project.links.webgl) output += `   WebGL: ${project.links.webgl}\n`;
          if (project.links.code) output += `   Code: ${project.links.code}\n`;
          if (project.links.android) output += `   Android: ${project.links.android}\n`;
          output += `   Status: ${project.status}\n\n`;
        });

        return output.trim();

      case 'socials':
        return `GitHub: ${socialLinks.github}
Itch.io: ${socialLinks.itchio}
YouTube: ${socialLinks.youtube}
Telegram: ${socialLinks.telegram}`;

      case 'contacts':
        return `Email: ${personalInfo.email}
Telegram: ${personalInfo.telegram}
Phone: ${personalInfo.phone}`;

      case 'clear':
        setLines([]);
        return '';

      default:
        return `Unknown command: '${cmd}'. Type 'help' for available commands.`;
    }
  }, []);

  const handleCommand = useCallback((cmd: string) => {
    if (!cmd.trim()) return;

    // Добавить команду в историю
    setCommandHistory(prev => [...prev, cmd]);
    setHistoryIndex(-1);

    // Добавить prompt и команду
    addLine({
      type: 'prompt',
      content: `> ${cmd}`
    });

    // Выполнить команду
    const output = executeCommand(cmd);
    
    if (cmd.toLowerCase().trim() !== 'clear' && output) {
      addLine({
        type: 'output',
        content: output
      });
    }

    setCurrentCommand('');
  }, [addLine, executeCommand]);

  const handleKeyDown = useCallback((e: KeyboardEvent) => {
    if (e.key === 'Enter') {
      handleCommand(currentCommand);
    } else if (e.key === 'ArrowUp') {
      e.preventDefault();
      if (commandHistory.length > 0) {
        const newIndex = historyIndex === -1 ? commandHistory.length - 1 : Math.max(0, historyIndex - 1);
        setHistoryIndex(newIndex);
        setCurrentCommand(commandHistory[newIndex]);
      }
    } else if (e.key === 'ArrowDown') {
      e.preventDefault();
      if (historyIndex !== -1) {
        const newIndex = historyIndex < commandHistory.length - 1 ? historyIndex + 1 : -1;
        setHistoryIndex(newIndex);
        setCurrentCommand(newIndex === -1 ? '' : commandHistory[newIndex]);
      }
    }
  }, [currentCommand, handleCommand, commandHistory, historyIndex]);

  const focusInput = useCallback(() => {
    inputRef.current?.focus();
  }, []);

  // Инициализация терминала
  useEffect(() => {
    const initTerminal = async () => {
      await new Promise(resolve => setTimeout(resolve, 500));
      
      addLine({
        type: 'system',
        content: 'Initializing system...'
      });

      await new Promise(resolve => setTimeout(resolve, 800));
      
      addLine({
        type: 'system',
        content: 'Loading portfolio...'
      });

      await new Promise(resolve => setTimeout(resolve, 1000));
      
      addLine({
        type: 'system',
        content: 'Ready.'
      });

      await new Promise(resolve => setTimeout(resolve, 500));
      
      addLine({
        type: 'output',
        content: `Welcome to ${personalInfo.name}'s portfolio terminal!
Type 'help' to see available commands.`
      });

      setIsLoading(false);
    };

    initTerminal();
  }, [addLine]);

  // Обработка событий клавиатуры
  useEffect(() => {
    document.addEventListener('keydown', handleKeyDown);
    return () => document.removeEventListener('keydown', handleKeyDown);
  }, [handleKeyDown]);

  return {
    lines,
    currentCommand,
    setCurrentCommand,
    isLoading,
    inputRef,
    terminalRef,
    focusInput,
    handleCommand
  };
};

