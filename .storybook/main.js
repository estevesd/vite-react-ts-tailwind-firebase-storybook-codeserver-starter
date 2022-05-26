const { mergeConfig, loadEnv } = require('vite');
const env = loadEnv('development', process.cwd(), '')

let storybookConf = {
  "stories": [
    "../src/**/*.stories.mdx",
    "../src/**/*.stories.@(js|jsx|ts|tsx)"
  ],
  "addons": [
    "@storybook/addon-links",
    "@storybook/addon-essentials",
    "@storybook/addon-interactions"
  ],
  "framework": "@storybook/react",
  "core": {
    "builder": "@storybook/builder-vite"
  },
  "features": {
    "storyStoreV7": true
  },
}
if (env.CODESERVER == 1){
  storybookConf = {
    ...storybookConf,
    ...{
      async viteFinal(config, { configType }) {
        return mergeConfig(config, {
          server:{ hmr:{ clientPort:443 }}
        });
      }
    }
  }
}

module.exports = storybookConf