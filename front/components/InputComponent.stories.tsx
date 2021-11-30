import { ComponentProps } from "react";
import BaseInputComponent from "./InputComponent";

const story = {
  title: "Layout/InputComponent",
  component: BaseInputComponent,
  argTypes: {},
};

export default story;

export function InputComponent(
  props: ComponentProps<typeof BaseInputComponent>
) {
  return <BaseInputComponent {...props} />;
}
