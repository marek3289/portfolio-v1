import React from 'react';

const defaultContextData = { darkMode: false, toggleTheme: () => {} };

const DarkModeContext = React.createContext(defaultContextData);

export default DarkModeContext;
