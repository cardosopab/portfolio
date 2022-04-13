module.exports = {
  purge: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      animation: {
        'spin-slow': 'spin 10s linear infinite',
        'pulse-slow': 'pulse 3s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'ping-slow':'ping 5s cubic-bezier(0, 0, 0.2, 1) infinite',
      }
      ,colors: {
        transparent: 'transparent',
        current: 'currentColor',
        'white': '#ffffff',
        // 'blue-gray' : '#8490A0',
        'periwinkle': '#4F476F',
        'periwinkle-crayola': '#CDDAFD',
        'purple-haze': '#E9D5FA',
        'pastel-pink': '#fde4cf',
        // 'lavender':'#B19FF9',
        'lavender-web':'#DFE7FD',
        'light-red':'#FC6D6D',
        // 'lilac':'#CCA1F3',
        // 'violet':'#B637FB',
        // 'champagne':'#EAD59F',
        // 'desert-sun':'#A07C33',
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}