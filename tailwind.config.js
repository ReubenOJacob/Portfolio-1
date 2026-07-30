/** Wraps a bare OKLCH channel token from globals.css so Tailwind can inject
 *  alpha — `bg-background/80` etc. compile to `oklch(var(--background) / .8)`.
 *  A raw `var(--x)` here would make every opacity modifier silently emit no CSS. */
const token = (name) => `oklch(var(${name}) / <alpha-value>)`

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./app/**/*.{ts,tsx}",
    "./src/**/*.{ts,tsx}",
  ],
  theme: {
    container: {
      center: true,
      padding: "1.5rem",
      screens: {
        "2xl": "1152px",
      },
    },
    extend: {
      fontFamily: {
        sans: ["var(--font-sans)", "system-ui", "sans-serif"],
        serif: ["var(--font-serif)", "Georgia", "serif"],
      },
      colors: {
        border: token("--border"),
        input: token("--input"),
        ring: token("--ring"),
        background: token("--background"),
        foreground: token("--foreground"),
        brand: token("--brand"),
        faint: token("--faint"),
        primary: {
          DEFAULT: token("--primary"),
          foreground: token("--primary-foreground"),
        },
        secondary: {
          DEFAULT: token("--secondary"),
          foreground: token("--secondary-foreground"),
        },
        destructive: {
          DEFAULT: token("--destructive"),
          foreground: token("--destructive-foreground"),
        },
        muted: {
          DEFAULT: token("--muted"),
          foreground: token("--muted-foreground"),
        },
        accent: {
          DEFAULT: token("--accent"),
          foreground: token("--accent-foreground"),
        },
        popover: {
          DEFAULT: token("--popover"),
          foreground: token("--popover-foreground"),
        },
        card: {
          DEFAULT: token("--card"),
          foreground: token("--card-foreground"),
        },
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "var(--radius)",
        sm: "var(--radius)",
      },
      typography: {
        DEFAULT: {
          css: {
            maxWidth: "68ch",
            color: "oklch(var(--foreground))",
            a: {
              color: "oklch(var(--brand))",
              textDecoration: "none",
              "&:hover": {
                textDecoration: "underline",
                textUnderlineOffset: "3px",
              },
            },
            "h1, h2, h3, h4": {
              color: "oklch(var(--foreground))",
              fontFamily: "var(--font-serif), Georgia, serif",
              fontWeight: "400",
            },
            blockquote: {
              color: "oklch(var(--muted-foreground))",
              fontStyle: "italic",
            },
            strong: {
              color: "oklch(var(--foreground))",
              fontWeight: "600",
            },
            code: {
              color: "oklch(var(--foreground))",
            },
          },
        },
      },
    },
  },
  plugins: [require("@tailwindcss/typography")],
}
