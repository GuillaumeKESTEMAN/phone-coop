import { ComponentProps } from "react";
import BaseTitle from "./title";

const story = {
  title: "Layout/Title",
  component: BaseTitle,
  argTypes: {
    text: {
      control: { type: "text" },
      defaultValue: "Title",
    },
    level: {
      control: { type: "select" },
      options: [1, 2, 3],
    },
  },
};

export default story;

export function Title({
  text,
  ...props
}: { text: string } & ComponentProps<typeof BaseTitle>) {
  return <BaseTitle {...props}>{text}</BaseTitle>;
}
