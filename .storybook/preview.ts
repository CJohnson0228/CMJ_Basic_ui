import type { Preview } from "@storybook/react";
import { withThemeFromJSXProvider } from '@storybook/addon-themes'
import { ThemeProvider } from '../src/styles/ThemeProvider'
import { lightTheme } from "../src/styles/theme/lightTheme";
import { darkTheme } from '../src/styles/theme/darkTheme';
import CssBaseline from '../src/components/CssBaseline';

const decorators = [
  withThemeFromJSXProvider({
    themes: {
      light: lightTheme,
      dark: darkTheme,
    },
    defaultTheme: 'dark',
    Provider: ThemeProvider,
    GlobalStyles: CssBaseline,
  })
]

const preview: Preview = {
  parameters: {
    actions: { argTypesRegex: "^on[A-Z].*" },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
    backgrounds: {
      default: 'Dark',
      values: [
        {
          name: 'Dark',
          value: '#212121',
        },
        {
          name: 'Light',
          value: '#dedede',
        }
      ]
    }
  },
  decorators: decorators
};

export default preview;
