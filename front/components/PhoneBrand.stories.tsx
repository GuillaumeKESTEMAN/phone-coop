import { ComponentProps } from "react";
import BasePhoneBrand from "./PhoneBrand";

const story = {
  title: "Layout/PhoneBrand",
  component: BasePhoneBrand,
  argTypes: {
    text: {
      control: { type: "text" },
      defaultValue: "Title",
    },
  },
};

export default story;

export function PhoneBrand({
  text,
  ...props
}: { text: string } & ComponentProps<typeof BasePhoneBrand>) {
  return <BasePhoneBrand {...props}>{text}</BasePhoneBrand>;
}
