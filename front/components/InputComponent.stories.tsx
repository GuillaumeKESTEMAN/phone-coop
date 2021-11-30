import { ComponentProps } from "react";
import BaseInputComponent from "./InputComponent";

const story = {
  title: "Layout/InputComponent",
  component: BaseInputComponent,
  argTypes: {
    text: {
      control: { type: "text" },
      defaultValue: "Title",
    },
  },
};

export default story;

export function InputComponent({
  text,
  ...props
}: { text: string } & ComponentProps<typeof BaseInputComponent>) {
  return <BaseInputComponent {...props}>{text}</BaseInputComponent>;
}
