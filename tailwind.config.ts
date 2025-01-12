import type { Config } from "tailwindcss";
import tailwindcssAnimate from "tailwindcss-animate";

export default {
	darkMode: ["class"],
	content: [ "./src/**/*.{js,ts,jsx,tsx,mdx}" ],
  theme: {
  	extend: {
			fontSize: {
				base: '15px'
			},
			margin: {
				top: '48px',
				bottom: '128px'
			},
			screens: {
				card: '923px',
				toGrid: '1550px'
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
			  celeste: { // for input accents
				  DEFAULT: '#60673f'
			  }
		  },
		  keyframes: {
			  shimmer: {
				  "100%": {
					  transform: "translateX(100%)",
				  },
			  },
		  }
  	}
  },
  plugins: [tailwindcssAnimate],
} satisfies Config;