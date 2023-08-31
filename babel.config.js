// module.exports = {
//     presets: [
//       '@babel/preset-env',
//       '@babel/preset-react',
//     ],
//     plugins: [
//       ['@babel/plugin-proposal-decorators', { legacy: true }],
//       '@babel/plugin-syntax-dynamic-import',
//       '@babel/plugin-syntax-import-meta',
//       '@babel/plugin-proposal-class-properties',
//       '@babel/plugin-proposal-json-strings',
//     ],
//   };

module.exports = {
    presets: [
        "@babel/preset-env",
        "@babel/preset-react"
    ],
    plugins: [
        ["@babel/plugin-proposal-decorators", { "legacy": true }],
        ["@babel/plugin-proposal-class-properties", { "loose": true }]
    ]
};
