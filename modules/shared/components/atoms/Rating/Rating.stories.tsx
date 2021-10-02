import type { ReactElement } from "react";
import type { Story } from "@storybook/react";
import Rating from "./Rating";
import { IRating } from "./IRating";

const args = {
  title: "Atoms/Rating",
  component: Rating,
};

export default args;

const Template: Story<IRating.IProps> = (args): ReactElement => (
  <Rating {...args} />
);

export const rating = Template.bind({});
rating.args = {
  rating: 3,
  active: false,
};
