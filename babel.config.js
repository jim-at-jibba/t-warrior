module.exports = function (api) {
  api.cache(true)
  return {
    presets: ["babel-preset-expo"],
    plugins: [
      [
        "module-resolver",
        {
          alias: {
            "@Components": "./src/components",
            "@Utils": "./src/utils",
            "@Hooks": "./src/hooks",
            "@Types": "./src/types",
            "@Constants": "./src/constants",
            "@Store": "./src/store",
            "@Features": "./src/features",
            "@Nav": "./src/navigation",
          },
        },
      ],
    ],
  }
}
