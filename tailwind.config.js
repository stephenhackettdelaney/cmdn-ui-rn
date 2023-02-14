module.exports = {
  content: ['./**/*.tsx'],
  theme: {
    extend: {
      spacing: {
        page: '16px',
      },
    },
  },
  plugins: [],
  corePlugins: require('tailwind-rn/unsupported-core-plugins'),
};
