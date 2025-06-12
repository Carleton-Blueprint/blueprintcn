export default function useTheme() {
  const isDarkMode = window.matchMedia('(prefers-color-scheme: dark)').matches;

  const toggleTheme = () => {
    const currentTheme = document.documentElement.getAttribute('data-theme');
    if (currentTheme === 'dark') {
      document.documentElement.setAttribute('data-theme', 'light');
    } else {
      document.documentElement.setAttribute('data-theme', 'dark');
    }
  };

  return { isDarkMode, toggleTheme };
}
