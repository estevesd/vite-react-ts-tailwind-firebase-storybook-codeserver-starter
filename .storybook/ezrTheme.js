import { create } from '@storybook/theming';
import logoLight from './ezr-logo-light.png';
import logoDark from './ezr-logo-dark.png';

let NordDark = create({
  base: 'dark',
  brandTitle: 'ezr storybook',
  brandUrl: 'https://ezr-dev',
  brandImage: logoLight,
  brandTarget: '_blank',

  colorPrimary: '#5e81ac',
  colorSecondary: '#81a1c1',

  // UI
  appBg: '#2e3440',
  appContentBg: '#3b4252',
  appBorderColor: '#5e81ac',
  appBorderRadius: 4,

  // Typography
  fontBase: '"Open Sans", sans-serif',
  fontCode: 'monospace',

  // Text colors
  textColor: '#81a1c1',
  textInverseColor: '#88c0d0',

  // Toolbar default and active colors
  barTextColor: '#81a1c1',
  barSelectedColor: '#8fbcbb',
  barBg: '#3b4252',

  // Form colors
  inputBg: '#d8dee9',
  inputBorder: '#e5e9f0',
  inputTextColor: '#3b4252',
  inputBorderRadius: 4,
});

let NordLight = create({
  base: 'light',
  brandTitle: 'ezr storybook',
  brandUrl: 'https://ezr-dev',
  brandImage: logoDark,
  brandTarget: '_blank',

  colorPrimary: '#5e81ac',
  colorSecondary: '#81a1c1',

  // UI
  appBg: '#e5e9f0',
  appContentBg: '#e5e9f0',
  appBorderColor: '#81a1c1',
  appBorderRadius: 4,

  // Typography
  fontBase: '"Open Sans", sans-serif',
  fontCode: 'monospace',

  // Text colors
  textColor: '#5e81ac',
  textInverseColor: '#8fbcbb',

  // Toolbar default and active colors
  barTextColor: '#81a1c1',
  barSelectedColor: '#8fbcbb',
  barBg: '#d8dee9',

  // Form colors
  inputBg: '#eceff4',
  inputBorder: '#e5e9f0',
  inputTextColor: '#5e81ac',
  inputBorderRadius: 4,
});

export {NordDark,NordLight}