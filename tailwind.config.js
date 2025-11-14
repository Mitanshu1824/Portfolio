export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      rotate: {
        'x-90': 'rotateX(90deg)',
      },
      translate: {
        '101': '101%',
      },
      keyframes: {
        marquee: {
          from: { transform: 'translateX(0%)' },
          to: { transform: 'translateX(-50%)' },
        },
      },
      animation: {
        marquee: 'marquee 15s linear infinite',
      },
    },
  },
  plugins: [function ({ addUtilities }) {
    addUtilities({
      '.transform-style-preserve-3d': {
        transformStyle: 'preserve-3d',
      },
      '.group-hover\\:rotate-x-90:hover .group': {
        transform: 'rotateX(90deg)',
      },
    });
  },
  ],
};
