module.exports = {
  stories: ['../src/components/**/*.stories.@(js|jsx|ts|tsx)'],
  addons: [
    '@storybook/addon-a11y',
    '@storybook/addon-design-assets',
    {
      name: '@storybook/addon-essentials',
      options: {
        controls: false,
        actions: false,
        docs: false,
      },
    },
  ],
}
