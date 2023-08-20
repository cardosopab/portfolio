module.exports = {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      animation: {
        'spin-slow': 'spin 10s linear infinite',
        'pulse-slow': 'pulse 3s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'ping-slow': 'ping 5s cubic-bezier(0, 0, 0.2, 1) infinite',
      }
      , colors: {
        transparent: 'transparent',
        current: 'currentColor',
        'white': '#ffffff',
        //https://realtimecolors.com/?colors=121a21-eaf7fb-005193-d8e1e9-587e9d
        'text': '#121a21',
        'background': '#eaf7fb',
        'primary': '#005193',
        'secondary': '#d8e1e9',
        'accent': '#587e9d',
        // https://realtimecolors.com/?colors=dcd6f5-0b071d-9f92d3-180f3e-705eb5
        // 'text': '#dcd6f5',
        // 'background': '#0b071d',
        // 'primary': '#9f92d3',
        // 'secondary': '#180f3e',
        // 'accent': '#705eb5',
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}