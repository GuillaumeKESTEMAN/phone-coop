import { ComponentProps } from "react";
import BaseFormRow from "./formRow";

const story = {
  title: "Layout/FormRow",
  component: BaseFormRow,
  argTypes: {

    label: {
      control: { type: "text" },
      defaultValue: "Voilà",
    },

  },
};

export default story;

export function FormRow(props: ComponentProps<typeof BaseFormRow>) {
  return <BaseFormRow {...{...props,errorMessages:[]}}><input type={"text"}/></BaseFormRow>;
}
