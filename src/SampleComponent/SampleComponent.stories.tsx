import React from 'react';
import { ComponentStory, Meta } from '@storybook/react';

import { ChakraProvider } from '@chakra-ui/react';
import { SampleComponent } from './SampleComponent';

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof SampleComponent> = (args) => (
  <SampleComponent {...args} />
);

export const Default = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Default.args = {
  title: 'タイトルです',
  url: '',
};

const meta: Meta<typeof SampleComponent> = {
  title: 'SampleComponent/SampleComponent',
  component: SampleComponent,
  decorators: [
    (Story) => (
      <ChakraProvider>
        <Story />
      </ChakraProvider>
    ),
  ],
};

export default meta;
