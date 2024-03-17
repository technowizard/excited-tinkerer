import { MoonIcon } from '@/assets/icons/moon-icon';
import { SunIcon } from '@/assets/icons/sun-icon';
import { useMounted } from '@/hooks/use-mounted';
import { AnimatePresence, motion } from 'framer-motion';
import { useTheme } from 'next-themes';

export function ThemeToggleButton() {
  const { resolvedTheme, setTheme } = useTheme();

  const mounted = useMounted();

  if (!mounted) {
    return null;
  }

  return (
    <AnimatePresence initial={false} mode="wait">
      <motion.div key={resolvedTheme === 'light' ? 'light' : 'dark'}>
        <button
          aria-label="theme-toggle-button"
          className="rounded-md p-2.5 text-neutral-900 ring-denim-500/50 transition hover:ring-2 dark:text-yellow-500 dark:ring-yellow-500/70"
          onClick={() =>
            setTheme(`${resolvedTheme === 'light' ? 'dark' : 'light'}`)
          }
        >
          {resolvedTheme === 'light' ? <MoonIcon /> : <SunIcon />}
        </button>
      </motion.div>
    </AnimatePresence>
  );
}
