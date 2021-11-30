import { ComponentProps } from "react";
import BaseFormSection from "./formSection";


const story = {
  title: "Layout/FormSection",
  component: BaseFormSection,
  argTypes: {
    title: {
      control: { type: "text" },
      defaultValue: "Title",
    },
  },
};

export default story;

export function FormSection(props: ComponentProps<typeof BaseFormSection>) {
  return <BaseFormSection {...props}></BaseFormSection>;
}
