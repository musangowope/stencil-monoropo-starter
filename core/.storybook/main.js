module.exports = {
  stories: ['../src/**/*.stories.mdx', '../src/**/*.stories.@(js|jsx|ts|tsx)'],
  addons: [
    '@storybook/addon-links',
    '@storybook/addon-essentials',
    {
      name: '@storybook/addon-docs',
      options: { transcludeMarkdown: true },
    },
  ],
  framework: '@storybook/html',
  features: {
    modernInlineRender: true,
  },
};
