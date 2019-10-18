module.exports = {
  extends: [
    'eslint-config-airbnb-base'
  ].map(require.resolve),
  rules: {
    indent: ["error", 4],
    func-names: "off",
    vars-on-top: "off",
    no-use-before-define: ["error", { "functions": false, "classes": true }],
    no-param-reassign: ["error", {"props":  false}],
    no-plusplus: ["error", { "allowForLoopAfterthoughts": true }],
    strict: ["error", "global"]
  }
};
