module.exports = function (api) {
  api.cache(true);
  return {
    presets: ["babel-preset-expo"],
    plugins: [
      [
        "module-resolver",
        {
          root: ["."],
          extensions: [".ts", ".tsx", ".jsx", ".js", ".json"],
          alias: {
            "components/*": ["./components/*"],
            "global/*": ["./global/*"],
            "screens/*": ["./screens/*"],
            "services/*": ["./services/*"],
          },
        },
      ],
    ],
  };
};
