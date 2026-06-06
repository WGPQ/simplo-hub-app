type Theme = 'light' | 'dark'

type ThemeToggleProps = {
  theme: Theme
  onToggle: () => void
}

export function ThemeToggle({ theme, onToggle }: ThemeToggleProps) {
  return (
    <button
      type="button"
      onClick={onToggle}
      className="theme-toggle inline-flex h-10 items-center gap-2 rounded-full px-3 text-xs font-medium backdrop-blur transition"
      aria-label={`Cambiar a modo ${theme === 'dark' ? 'claro' : 'oscuro'}`}
    >
      <span className="theme-toggle__track relative h-5 w-9 rounded-full p-0.5">
        <span
          className={`theme-toggle__thumb block h-4 w-4 rounded-full shadow-sm transition-transform ${
            theme === 'dark' ? 'translate-x-4' : 'translate-x-0'
          }`}
        />
      </span>
      <span>{theme === 'dark' ? 'Dark' : 'Light'}</span>
    </button>
  )
}
