export interface TerminalLine {
  id: string;
  type: 'prompt' | 'command' | 'output' | 'system';
  content: string;
  timestamp: number;
}

export interface CommandHistory {
  command: string;
  output: string;
  timestamp: number;
}

export type CommandName = 'help' | 'about' | 'projects' | 'socials' | 'contacts' | 'clear' | 'unknown';

export interface Project {
  name: string;
  description: string;
  status: 'Released' | 'In development';
  links: {
    webgl?: string;
    code?: string;
    android?: string;
  };
  icon?: string;
}

export interface PersonalInfo {
  name: string;
  title: string;
  location: string;
  email: string;
  telegram: string;
  phone: string;
  experience: string;
  skills: string[];
}