/** @type { import('@storybook/react-webpack5').Preview } */
import { fn } from "storybook/test";

const preview = {
  parameters: {
    args: { onClick: fn() },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
  },
};

export default preview;
