import type { Config } from "tailwindcss";
import tailwindcssAnimate from "tailwindcss-animate";

export default {
	darkMode: ["class"],
	content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
  	extend: {
			borderWidth: {
				1: '1px'
			},
  		borderRadius: {
  			lg: 'var(--radius)',
  			md: 'calc(var(--radius) - 2px)',
  			sm: 'calc(var(--radius) - 4px)'
  		},
  		colors: {
				dough: '#fbfaf5',
			  brown: {
          100: '#3b1f15',
				  DEFAULT: 'rgba(59,31,21,0.8)',
				  80: 'rgba(59,31,21,0.6)'
			  },
			  ember: { // for danger buttons
				  100: '#e68a4a',
				  DEFAULT: '#ffab73',
				  80: '#ffd7ba',
			  },
			  meadow: { // for refresh buttons
				  100: '#62b562',
				  DEFAULT: '#90e090',
				  80: '#d4f8d4',
			  },
			  celeste: { // for input accents
				  DEFAULT: '#accbee'
			  }
		  }
  	}
  },
  plugins: [tailwindcssAnimate],
} satisfies Config;