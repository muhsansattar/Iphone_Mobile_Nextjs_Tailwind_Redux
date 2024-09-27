const config= {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
     "./node_modules/flowbite/**/*.js"
  ],
  theme: {
    extend: {
      backgroundImage: {
        'custom-gradient': 'linear-gradient(90.7deg, #211C24 0.64%, #211C24 101%)',
        'lcd-gradient':'linear-gradient(100.23deg, #2E2E2E 42.36%, #000000 98.65%)',
      },
      fontFamily:{
        figtree: ['Figtree', 'sans-serif'],
        sfPro: ['SF Pro Display', 'sans-serif'],
      },
    },
  },
  plugins: [
    require('flowbite/plugin')
]
};
export default config;
