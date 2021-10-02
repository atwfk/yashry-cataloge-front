import type { ReactElement } from "react";
import type { Story } from "@storybook/react";
import Color from "./Color";
import { IColor } from "./IColor";

const args = {
  title: "Atoms/Color",
  component: Color,
};

export default args;

const Template: Story<IColor.IProps> = (args): ReactElement => (
  <Color {...args} />
);

export const color = Template.bind({});
color.args = {
  name: "red",
  active: false,
};
