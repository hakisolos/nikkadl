// tailwind.config.ts
import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/**/*.{js,ts,jsx,tsx,mdx}',
    // ... your content paths
  ],
  theme: {
    extend: {
      colors: {
        border: 'hsl(var(--border))',
        background: 'hsl(var(--background))',
        foreground: 'hsl(var(--foreground))',
        // ... add all your CSS variables as colors
      },
      borderColor: {
        border: 'hsl(var(--border))',
      },
    },
  },
  plugins: [],
}

export default config