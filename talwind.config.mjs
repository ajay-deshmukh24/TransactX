export default {
  content: [
    "./packages/ui/**/*.{js,ts,jsx,tsx}", // Shared UI components
    "./apps/**/pages/**/*.{js,ts,jsx,tsx}", // Next.js pages (if using Next.js)
    "./apps/**/components/**/*.{js,ts,jsx,tsx}", // Components inside each app
  ],
  theme: {
    extend: {},
  },
  plugins: [],
};
