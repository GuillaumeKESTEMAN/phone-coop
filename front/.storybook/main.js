const path = require('path');

// TODO: Use '@next/plugin-storybook/preset' when not experimental anymore
// https://github.com/vercel/next.js/pull/12934
module.exports = {
  stories: ['../components/*.stories.tsx'],
  addons: ['@storybook/addon-essentials'],
  // Tempfix for https://github.com/storybookjs/storybook/issues/11255
  // Taken from https://gist.github.com/justincy/b8805ae2b333ac98d5a3bd9f431e8f70
  webpackFinal: async (baseConfig) => {
    // Modify or replace config. Mutating the original reference object can cause unexpected bugs.
    const { module = {} } = baseConfig;

    const newConfig = {
      ...baseConfig,
      module: {
        ...module,
        rules: [...(module.rules || [])]
      }
    };

    // TypeScript with Next.js
    newConfig.module.rules.push({
      test: /\.(ts|tsx)$/,
      include: [
        path.resolve(__dirname, '../components'),
        path.resolve(__dirname, '../stories')
      ],
      use: [
        {
          loader: 'babel-loader',
          options: {
            presets: ['next/babel'],
            plugins: ['react-docgen']
          }
        }
      ]
    });

    newConfig.resolve.extensions.push('.ts', '.tsx');
    // First we prevent webpack from using Storybook CSS rules to process CSS modules
    newConfig.module.rules.find(
      rule => rule.test.toString() === '/\\.css$/'
    ).exclude = /\.module\.css$/;

    // Then we tell webpack what to do with CSS modules
    newConfig.module.rules.push({
      test: /\.module\.css$/,
      include: path.resolve(__dirname, '../components'),
      use: [
        'style-loader',
        {
          loader: 'css-loader',
          options: {
            importLoaders: 1,
            modules: true
          }
        }
      ]
    });

    return newConfig;
  },
};
