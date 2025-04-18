
import type { Config } from "tailwindcss";

export default {
	darkMode: ["class"],
	content: [
		"./pages/**/*.{ts,tsx}",
		"./components/**/*.{ts,tsx}",
		"./app/**/*.{ts,tsx}",
		"./src/**/*.{ts,tsx}",
	],
	prefix: "",
	theme: {
		container: {
			center: true,
			padding: '2rem',
			screens: {
				'2xl': '1400px'
			}
		},
		extend: {
			colors: {
				border: 'hsl(var(--border))',
				input: 'hsl(var(--input))',
				ring: 'hsl(var(--ring))',
				background: 'hsl(var(--background))',
				foreground: 'hsl(var(--foreground))',
				primary: {
					DEFAULT: 'hsl(var(--primary))',
					foreground: 'hsl(var(--primary-foreground))'
				},
				secondary: {
					DEFAULT: 'hsl(var(--secondary))',
					foreground: 'hsl(var(--secondary-foreground))'
				},
				destructive: {
					DEFAULT: 'hsl(var(--destructive))',
					foreground: 'hsl(var(--destructive-foreground))'
				},
				muted: {
					DEFAULT: 'hsl(var(--muted))',
					foreground: 'hsl(var(--muted-foreground))'
				},
				accent: {
					DEFAULT: 'hsl(var(--accent))',
					foreground: 'hsl(var(--accent-foreground))'
				},
				popover: {
					DEFAULT: 'hsl(var(--popover))',
					foreground: 'hsl(var(--popover-foreground))'
				},
				card: {
					DEFAULT: 'hsl(var(--card))',
					foreground: 'hsl(var(--card-foreground))'
				},
				sidebar: {
					DEFAULT: 'hsl(var(--sidebar-background))',
					foreground: 'hsl(var(--sidebar-foreground))',
					primary: 'hsl(var(--sidebar-primary))',
					'primary-foreground': 'hsl(var(--sidebar-primary-foreground))',
					accent: 'hsl(var(--sidebar-accent))',
					'accent-foreground': 'hsl(var(--sidebar-accent-foreground))',
					border: 'hsl(var(--sidebar-border))',
					ring: 'hsl(var(--sidebar-ring))'
				},
				space: {
					'deep-blue': '#0A1128',
					'cosmic-blue': '#1F2D5A',
					'nebula-purple': '#5A3687',
					'star-yellow': '#FFD166',
					'mars-red': '#EF6351'
				},
				// Add direct color references to match the CSS class names
				'nebula-purple': '#5A3687',
				'purple': {
					'400': '#9B87F5',
					'500': '#7E69AB',
					'700': '#6E59A5',
				},
			},
			borderRadius: {
				lg: 'var(--radius)',
				md: 'calc(var(--radius) - 2px)',
				sm: 'calc(var(--radius) - 4px)'
			},
			keyframes: {
				'accordion-down': {
					from: { height: '0' },
					to: { height: 'var(--radix-accordion-content-height)' }
				},
				'accordion-up': {
					from: { height: 'var(--radix-accordion-content-height)' },
					to: { height: '0' }
				},
				'star-pulse': {
					'0%, 100%': { opacity: '0.4' },
					'50%': { opacity: '1' }
				},
				'fade-in': {
					'0%': { opacity: '0' },
					'100%': { opacity: '1' }
				},
				'zoom-in': {
					'0%': { transform: 'scale(0.95)' },
					'100%': { transform: 'scale(1)' }
				},
				'twinkle': {
					'0%, 100%': { opacity: '0.3', transform: 'scale(1)' },
					'50%': { opacity: '1', transform: 'scale(1.2)' }
				},
				'pulse': {
					'0%, 100%': { opacity: '0.85' },
					'50%': { opacity: '1' }
				}
			},
			animation: {
				'accordion-down': 'accordion-down 0.2s ease-out',
				'accordion-up': 'accordion-up 0.2s ease-out',
				'star-pulse': 'star-pulse 3s ease-in-out infinite',
				'fade-in': 'fade-in 0.5s ease-out',
				'zoom-in': 'zoom-in 0.5s ease-out',
				'twinkle': 'twinkle 3s ease-in-out infinite',
				'pulse': 'pulse 2s ease-in-out infinite'
			},
			backgroundImage: {
				'space-gradient': 'linear-gradient(to bottom, #0A1128, #1F2D5A, #5A3687)',
				'cosmic-glow': 'radial-gradient(circle at center, rgba(255,209,102,0.15) 0%, rgba(10,17,40,0) 70%)'
			}
		}
	},
	plugins: [require("tailwindcss-animate")],
} satisfies Config;
