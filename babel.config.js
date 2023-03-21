module.exports = function (api) {
  api.cache(true);
  return {
    presets: ["babel-preset-expo"],
    plugins: [
      "@babel/plugin-proposal-export-namespace-from",
      "react-native-reanimated/plugin",
      "nativewind/babel",
      require.resolve("expo-router/babel"),
      [
        "module:react-native-dotenv",
        {
          allowlist: ["API_HOST", "API_HOST"],
          moduleName: "@env",
          path: ".env",
          blocklist: null,
          allowlist: null,
          blacklist: null,
          whitelist: null,
          safe: false,
          allowUndefined: false,
          verbose: false,
        },
      ],
    ],
  };
};
