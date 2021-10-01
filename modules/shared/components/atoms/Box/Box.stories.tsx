import type { ReactElement } from "react";
import type { Story } from "@storybook/react";
import Box from "./Box";

const args = {
  title: "Atoms/Box",
  component: Box,
};

export default args;

const Template: Story = (args): ReactElement => (
  <Box {...args}>normal text</Box>
);

export const box = Template.bind({});
box.args = {};
