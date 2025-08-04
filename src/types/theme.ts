export interface CustomTheme {
  id: string;
  name: string;
  backgroundImage?: string;
  primaryColor: string;
  secondaryColor: string;
  accentColor: string;
  isPremium: boolean;
}

export interface ThemeContextType {
  theme: 'light' | 'dark' | 'system';
  setTheme: (theme: 'light' | 'dark' | 'system') => void;
  customTheme: CustomTheme | null;
  setCustomTheme: (theme: CustomTheme | null) => void;
  isPremium: boolean;
  unlockPremium: () => void;
  customBackgroundImage: string | null;
  setCustomBackgroundImage: (image: string | null) => void;
}

export const defaultThemes: CustomTheme[] = [
  {
    id: 'ocean',
    name: 'Ocean Blue',
    primaryColor: '#0ea5e9',
    secondaryColor: '#0284c7',
    accentColor: '#38bdf8',
    isPremium: true
  },
  {
    id: 'sunset',
    name: 'Sunset Orange',
    primaryColor: '#f97316',
    secondaryColor: '#ea580c',
    accentColor: '#fb923c',
    isPremium: true
  },
  {
    id: 'forest',
    name: 'Forest Green',
    primaryColor: '#16a34a',
    secondaryColor: '#15803d',
    accentColor: '#4ade80',
    isPremium: true
  }
];