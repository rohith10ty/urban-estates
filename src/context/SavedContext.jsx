import React, { createContext, useContext, useState, useEffect } from 'react';
import { properties } from '../data/properties';

const SavedContext = createContext();

export const SavedProvider = ({ children }) => {
  const [savedIds, setSavedIds] = useState(() => {
    try {
      const stored = localStorage.getItem('urban_estates_saved');
      return stored ? JSON.parse(stored) : ['the-glass-pavilion', 'the-tribeca-sky-penthouse'];
    } catch {
      return ['the-glass-pavilion', 'the-tribeca-sky-penthouse'];
    }
  });

  const [isDrawerOpen, setIsDrawerOpen] = useState(false);

  useEffect(() => {
    try {
      localStorage.setItem('urban_estates_saved', JSON.stringify(savedIds));
    } catch {
      // ignore
    }
  }, [savedIds]);

  const toggleSave = (id) => {
    setSavedIds((prev) =>
      prev.includes(id) ? prev.filter((item) => item !== id) : [...prev, id]
    );
  };

  const isSaved = (id) => savedIds.includes(id);

  const savedProperties = properties.filter((p) => savedIds.includes(p.id));

  return (
    <SavedContext.Provider
      value={{
        savedIds,
        savedProperties,
        toggleSave,
        isSaved,
        isDrawerOpen,
        setIsDrawerOpen,
        savedCount: savedIds.length,
      }}
    >
      {children}
    </SavedContext.Provider>
  );
};

export const useSaved = () => {
  const context = useContext(SavedContext);
  if (!context) {
    throw new Error('useSaved must be used within a SavedProvider');
  }
  return context;
};
