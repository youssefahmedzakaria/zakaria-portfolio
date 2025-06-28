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
				}
			},
			borderRadius: {
				lg: 'var(--radius)',
				md: 'calc(var(--radius) - 2px)',
				sm: 'calc(var(--radius) - 4px)'
			},
			keyframes: {
				'accordion-down': {
					from: {
						height: '0'
					},
					to: {
						height: 'var(--radix-accordion-content-height)'
					}
				},
				'accordion-up': {
					from: {
						height: 'var(--radix-accordion-content-height)'
					},
					to: {
						height: '0'
					}
				},
				'fade-in': {
					from: { opacity: '0' },
					to: { opacity: '1' }
				},
				'fade-up': {
					from: { opacity: '0', transform: 'translateY(10px)' },
					to: { opacity: '1', transform: 'translateY(0)' }
				},
				'fade-down': {
					from: { opacity: '0', transform: 'translateY(-10px)' },
					to: { opacity: '1', transform: 'translateY(0)' }
				},
				'fade-left': {
					from: { opacity: '0', transform: 'translateX(10px)' },
					to: { opacity: '1', transform: 'translateX(0)' }
				},
				'fade-right': {
					from: { opacity: '0', transform: 'translateX(-10px)' },
					to: { opacity: '1', transform: 'translateX(0)' }
				},
				'float': {
					'0%, 100%': { transform: 'translateY(0)' },
					'50%': { transform: 'translateY(-10px)' }
				},
				'float-slow': {
					'0%, 100%': { transform: 'translateY(0)' },
					'50%': { transform: 'translateY(-15px)' }
				},
				'pulse-subtle': {
					'0%, 100%': { opacity: '1' },
					'50%': { opacity: '0.8' }
				},
				'pulse-glow': {
					'0%, 100%': { 
						boxShadow: '0 0 20px rgba(var(--gradient-primary), 0.3)',
						transform: 'scale(1)'
					},
					'50%': { 
						boxShadow: '0 0 40px rgba(var(--gradient-primary), 0.6)',
						transform: 'scale(1.05)'
					}
				},
				'spin-slow': {
					from: { transform: 'rotate(0deg)' },
					to: { transform: 'rotate(360deg)' }
				},
				'spin-reverse': {
					from: { transform: 'rotate(360deg)' },
					to: { transform: 'rotate(0deg)' }
				},
				'slide-in-bottom': {
					from: { transform: 'translateY(20px)', opacity: '0' },
					to: { transform: 'translateY(0)', opacity: '1' }
				},
				'slide-in-left': {
					from: { transform: 'translateX(-20px)', opacity: '0' },
					to: { transform: 'translateX(0)', opacity: '1' }
				},
				'slide-in-right': {
					from: { transform: 'translateX(20px)', opacity: '0' },
					to: { transform: 'translateX(0)', opacity: '1' }
				},
				'slide-in-top': {
					from: { transform: 'translateY(-20px)', opacity: '0' },
					to: { transform: 'translateY(0)', opacity: '1' }
				},
				'border-pulse': {
					'0%, 100%': { borderColor: 'hsla(var(--primary), 0.3)' },
					'50%': { borderColor: 'hsla(var(--primary), 0.6)' }
				},
				'shimmer': {
					'0%': { backgroundPosition: '-200% 0' },
					'100%': { backgroundPosition: '200% 0' }
				},
				'bounce-gentle': {
					'0%, 100%': { transform: 'translateY(0)' },
					'50%': { transform: 'translateY(-5px)' }
				},
				'scale-in': {
					from: { transform: 'scale(0.9)', opacity: '0' },
					to: { transform: 'scale(1)', opacity: '1' }
				},
				'scale-out': {
					from: { transform: 'scale(1)', opacity: '1' },
					to: { transform: 'scale(0.9)', opacity: '0' }
				},
				'wiggle': {
					'0%, 100%': { transform: 'rotate(-3deg)' },
					'50%': { transform: 'rotate(3deg)' }
				},
				'glow': {
					'0%, 100%': { 
						boxShadow: '0 0 5px rgba(var(--primary), 0.5)',
						textShadow: '0 0 5px rgba(var(--primary), 0.5)'
					},
					'50%': { 
						boxShadow: '0 0 20px rgba(var(--primary), 0.8)',
						textShadow: '0 0 20px rgba(var(--primary), 0.8)'
					}
				},
				'gradient-shift': {
					'0%, 100%': { backgroundPosition: '0% 50%' },
					'50%': { backgroundPosition: '100% 50%' }
				},
				'text-shimmer': {
					'0%': { backgroundPosition: '-200% center' },
					'100%': { backgroundPosition: '200% center' }
				}
			},
			animation: {
				'accordion-down': 'accordion-down 0.2s ease-out',
				'accordion-up': 'accordion-up 0.2s ease-out',
				'fade-in': 'fade-in 0.5s ease-out',
				'fade-up': 'fade-up 0.5s ease-out',
				'fade-down': 'fade-down 0.5s ease-out',
				'fade-left': 'fade-left 0.5s ease-out',
				'fade-right': 'fade-right 0.5s ease-out',
				'float': 'float 6s ease-in-out infinite',
				'float-slow': 'float-slow 8s ease-in-out infinite',
				'pulse-subtle': 'pulse-subtle 3s ease-in-out infinite',
				'pulse-glow': 'pulse-glow 3s ease-in-out infinite',
				'spin-slow': 'spin-slow 12s linear infinite',
				'spin-reverse': 'spin-reverse 8s linear infinite',
				'slide-in-bottom': 'slide-in-bottom 0.5s ease-out',
				'slide-in-left': 'slide-in-left 0.5s ease-out',
				'slide-in-right': 'slide-in-right 0.5s ease-out',
				'slide-in-top': 'slide-in-top 0.5s ease-out',
				'border-pulse': 'border-pulse 2s ease-in-out infinite',
				'shimmer': 'shimmer 2s linear infinite',
				'bounce-gentle': 'bounce-gentle 2s ease-in-out infinite',
				'scale-in': 'scale-in 0.3s ease-out',
				'scale-out': 'scale-out 0.3s ease-out',
				'wiggle': 'wiggle 1s ease-in-out infinite',
				'glow': 'glow 2s ease-in-out infinite',
				'gradient-shift': 'gradient-shift 3s ease infinite',
				'text-shimmer': 'text-shimmer 2s linear infinite'
			},
			backgroundImage: {
				'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
				'gradient-conic': 'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
				'gradient-mesh': 'linear-gradient(45deg, hsl(var(--primary)/0.1) 0%, hsl(var(--secondary)/0.1) 50%, hsl(var(--accent)/0.1) 100%)',
				'gradient-hero': 'linear-gradient(135deg, hsl(var(--primary)/0.1) 0%, hsl(var(--secondary)/0.05) 50%, hsl(var(--accent)/0.1) 100%)',
				'gradient-card': 'linear-gradient(135deg, hsl(var(--card)) 0%, hsl(var(--card)/0.8) 100%)',
				'shimmer': 'linear-gradient(90deg, transparent, rgba(255,255,255,0.1), transparent)',
				'text-shimmer': 'linear-gradient(90deg, hsl(var(--primary)), hsl(var(--secondary)), hsl(var(--primary)))'
			},
			boxShadow: {
				'glow': '0 0 20px rgba(var(--primary), 0.3)',
				'glow-lg': '0 0 40px rgba(var(--primary), 0.4)',
				'glow-xl': '0 0 60px rgba(var(--primary), 0.5)',
				'inner-glow': 'inset 0 0 20px rgba(var(--primary), 0.1)',
				'card-glow': '0 4px 20px rgba(var(--primary), 0.1)',
				'button-glow': '0 0 15px rgba(var(--primary), 0.3)'
			},
			backdropBlur: {
				'xs': '2px',
			}
		}
	},
	plugins: [require("tailwindcss-animate")],
} satisfies Config;
