import { IconMoon } from '@tabler/icons-react';
import { IconSun } from '@tabler/icons-react';

import { Button } from '@/src/components/ui/button';
import { useTheme } from '@/src/hooks/theme/useTheme';
const ToggleTheme: React.FC = () => {
  const { theme, toggleTheme } = useTheme();
  return (
    <Button
      variant="ghost"
      size="icon"
      onClick={toggleTheme}
      className="size-9 rounded-md"
      aria-label="Toggle theme"
    >
      {theme === 'dark' ? <IconMoon className="absolute size-5" /> : <IconSun className="size-5" />}
    </Button>
  );
};

export default ToggleTheme;
