import type { ReactElement } from "react";
import type { Story } from "@storybook/react";
import ColorFilter from "./ColorFilter";
import { IColorFilter } from "./IColorFilter";

const args = {
  title: "Organisms/ColorFilter",
  component: ColorFilter,
};

export default args;

const Template: Story<IColorFilter.IProps> = (args): ReactElement => (
  <div className="flex">
    <ColorFilter {...args} />
  </div>
);

export const colorFilter = Template.bind({});
colorFilter.args = {
  colors: [
    { id: 1, name: "red", active: true },
    { id: 2, name: "black", active: false },
    { id: 3, name: "aqua", active: true },
  ],
};
