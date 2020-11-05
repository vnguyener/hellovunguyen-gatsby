const TOGGLE_DARKMODE = 'TOGGLE_DARKMODE';

export const toggleDarkMode = (isDarkMode: boolean) => ({
  type: TOGGLE_DARKMODE,
  isDarkMode,
});
