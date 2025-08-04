import React, { createContext, useContext, useEffect, useState } from 'react';
import { ThemeContextType, CustomTheme } from '@/types/theme';

const ThemeContext = createContext<ThemeContextType | null>(null);

export function EnhancedThemeProvider({ children }: { children: React.ReactNode }) {
  const [theme, setThemeState] = useState<'light' | 'dark' | 'system'>(() => {
    const saved = localStorage.getItem('theme');
    return (saved as 'light' | 'dark' | 'system') || 'system';
  });
  
  const [customTheme, setCustomTheme] = useState<CustomTheme | null>(() => {
    const saved = localStorage.getItem('customTheme');
    return saved ? JSON.parse(saved) : null;
  });
  
  const [isPremium, setIsPremium] = useState(() => {
    return localStorage.getItem('isPremium') === 'true';
  });
  
  const [customBackgroundImage, setCustomBackgroundImageState] = useState<string | null>(() => {
    return localStorage.getItem('customBackgroundImage');
  });

  useEffect(() => {
    const root = document.documentElement;
    root.classList.remove('light', 'dark');
    
    if (theme === 'system') {
      const systemTheme = window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
      root.classList.add(systemTheme);
    } else {
      root.classList.add(theme);
    }
    
    if (customTheme && isPremium) {
      root.style.setProperty('--primary', customTheme.primaryColor);
      root.style.setProperty('--secondary', customTheme.secondaryColor);
      root.style.setProperty('--accent', customTheme.accentColor);
    }
  }, [theme, customTheme, isPremium]);

  const setTheme = (newTheme: 'light' | 'dark' | 'system') => {
    localStorage.setItem('theme', newTheme);
    setThemeState(newTheme);
  };

  const setCustomThemeWithStorage = (newTheme: CustomTheme | null) => {
    if (newTheme) {
      localStorage.setItem('customTheme', JSON.stringify(newTheme));
    } else {
      localStorage.removeItem('customTheme');
    }
    setCustomTheme(newTheme);
  };

  const unlockPremium = () => {
    localStorage.setItem('isPremium', 'true');
    setIsPremium(true);
  };

  const setCustomBackgroundImage = (image: string | null) => {
    if (image) {
      localStorage.setItem('customBackgroundImage', image);
    } else {
      localStorage.removeItem('customBackgroundImage');
    }
    setCustomBackgroundImageState(image);
  };

  return (
    <ThemeContext.Provider value={{
      theme,
      setTheme,
      customTheme,
      setCustomTheme: setCustomThemeWithStorage,
      isPremium,
      unlockPremium,
      customBackgroundImage,
      setCustomBackgroundImage
    }}>
      {children}
    </ThemeContext.Provider>
  );
}

export const useEnhancedTheme = () => {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error('useEnhancedTheme must be used within EnhancedThemeProvider');
  }
  return context;
};