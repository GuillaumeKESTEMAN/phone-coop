import { ComponentProps } from "react";
import BaseNameInput from "./nameInput";

const story = {
  title: "Layout/NameInput",
  component: BaseNameInput,
  argTypes: {
    text: {
      control: { type: "text" },
      defaultValue: "nameInput",
    },
  },
};

export default story;

export function NameInput(props: ComponentProps<typeof BaseNameInput>) {
  return <BaseNameInput/>;
}
