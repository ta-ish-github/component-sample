import React from 'react'
import type { Preview } from "@storybook/react";
import { ThemeProvider } from '@emotion/react';
import { Renderer } from '@storybook/types';

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
};

export default preview;
