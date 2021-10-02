import type { ReactElement } from "react";
import type { Story } from "@storybook/react";
import ColorFilter from "./ColorFilter";
import { IData } from "../../../types/IData";

const args = {
  title: "Organisms/ColorFilter",
  component: ColorFilter,
};

export default args;

const Template: Story<{ colors: IData.IFilteredColors[] }> = (
  args,
): ReactElement => (
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
