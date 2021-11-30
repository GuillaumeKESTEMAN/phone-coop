import { ComponentProps } from "react";
import BaseValidationButton from "./validationButton";

const story = {
  title: "Layout/ValidationButton",
  component: BaseValidationButton,
  argTypes: {
    text: {
      control: { type: "text" },
      defaultValue: "Button",
    },
    type: {
      control: { type: "select" },
      options: ["submit", "button"],
      defaultValue: "button",
    },
  },
};

export default story;

export function ValidationButton({
  text,
  ...props
}: { text: string } & ComponentProps<typeof BaseValidationButton>) {
  return <BaseValidationButton {...props}>{text}</BaseValidationButton>;
}
