module.exports = {
  plugins: {
    "@stylexjs/postcss-plugin": {
      include: ["src/**/*.{js,jsx,ts,tsx}"],
      babelConfig: {
        babelrc: false,
        configFile: false,
        presets: [require.resolve("@babel/preset-typescript")],
        plugins: [
          [
            require.resolve("@stylexjs/babel-plugin"),
            {
              dev: false,
              runtimeInjection: false,
              unstable_moduleResolution: {
                type: "commonJS",
                rootDir: __dirname,
              },
            },
          ],
        ],
      },
    },
  },
};
