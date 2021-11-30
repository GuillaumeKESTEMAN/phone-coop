import { ComponentProps } from "react";
import BaseParagraph from "./paragraph";

const story = {
  title: "Layout/Paragraph",
  component: BaseParagraph,
  argTypes: {
    text: {
      control: { type: "text" },
      defaultValue: "Paragraph",
    },
  },
};

export default story;

export function Paragraph({
  text,
  ...props
}: { text: string } & ComponentProps<typeof BaseParagraph>) {
  return <BaseParagraph {...props}>{text}</BaseParagraph>;
}
