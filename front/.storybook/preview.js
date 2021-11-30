import { addDecorator } from "@storybook/react";
import React from "react";
import { MINIMAL_VIEWPORTS } from '@storybook/addon-viewport';

import "!style-loader!css-loader!../public/styles/main.css";

export const parameters = {
  viewport: {
    viewports: MINIMAL_VIEWPORTS,
  },
};

addDecorator((storyFn) => (
  <div>
    {storyFn()}
  </div>
));
