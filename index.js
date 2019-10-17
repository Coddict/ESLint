moduel.exports = {
  extends: [
    'eslint-config-airbnb-base',
    './rules/react',
    './rules/react-ally',
  ].map(require.resolve),
  rules: {}
};
