import React from 'react';

const defaultContextData = { darkMode: true, toggleTheme: () => {} };

const DarkModeContext = React.createContext(defaultContextData);

export default DarkModeContext;