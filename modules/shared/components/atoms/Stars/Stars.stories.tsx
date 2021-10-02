import type { ReactElement } from "react";
import type { Story } from "@storybook/react";
import Star from "./Stars";

const args = {
  title: "Atoms/Star",
  component: Star,
  argTypes: {
    rating: {
      options: [1, 2, 3, 4, 5],
      control: { type: "select" },
    },
  },
};

export default args;

const Template: Story<{ rating: number }> = (args): ReactElement => (
  <Star {...args}>normal text</Star>
);

export const star = Template.bind({});
star.args = {
  rating: 3,
};
