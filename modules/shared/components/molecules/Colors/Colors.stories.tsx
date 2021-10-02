import type { ReactElement } from "react";
import type { Story } from "@storybook/react";
import Colors from "./Colors";
import { IColors } from "./IColors";

const args = {
  title: "Molecules/Colors",
  component: Colors,
};

export default args;

const Template: Story<IColors.IProps> = (args): ReactElement => (
  <div className="flex">
    <Colors {...args} />
  </div>
);

export const colors = Template.bind({});
colors.args = {
  colors: [
    { id: 1, name: "red", active: true },
    { id: 2, name: "black", active: false },
    { id: 3, name: "aqua", active: true },
  ],
};
