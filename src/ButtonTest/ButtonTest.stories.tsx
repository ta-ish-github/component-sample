import React from 'react';
import { ComponentStory, Meta } from '@storybook/react';

import { ButtonTest } from './ButtonTest';
import { ChakraProvider } from '@chakra-ui/react';

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
// export default {
//     title:  'ButtonTest/ButtonTest',
//     component: ButtonTest
// } as ComponentMeta<typeof ButtonTest>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof ButtonTest> = (args) => (
  <ButtonTest {...args} />
);

export const Default = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Default.args = {
  buttonText: 'hello, world',
};

const meta: Meta<typeof ButtonTest> = {
  title: 'ButtonTest/ButtonTest',
  component: ButtonTest,
  decorators: [
    (Story) => (
      <ChakraProvider>
        <Story />
      </ChakraProvider>
    ),
  ],
};

export default meta;
