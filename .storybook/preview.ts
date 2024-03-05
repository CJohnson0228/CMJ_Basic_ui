import type { Preview } from "@storybook/react";
import 'the-new-css-reset'
import { withThemeFromJSXProvider } from '@storybook/addon-themes'
import { ThemeProvider } from '../src/styles/ThemeProvider'
import { lightTheme } from "../src/styles/theme/lightTheme";
import { darkTheme } from '../src/styles/theme/darkTheme';

const decorators = [
  withThemeFromJSXProvider({
    themes: {
      light: lightTheme,
      dark: darkTheme,
    },
    defaultTheme: 'dark',
    Provider: ThemeProvider,
    GlobalStyles: 'the-new-css-reset',
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
  },
  decorators: decorators
};

export default preview;
