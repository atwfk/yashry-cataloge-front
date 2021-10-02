import type { ReactElement } from "react";
import type { Story } from "@storybook/react";
import Star from "./Stars";

const args = {
  title: "Atoms/Stars",
  component: Star,
  argTypes: {
    rating: {
      options: [1, 2, 3, 4, 5],
      control: { type: "select" },
    },
  },
};

export default args;

const Template: Story<{ rating: number; active: boolean }> = (
  args,
): ReactElement => <Star {...args}>normal text</Star>;

export const stars = Template.bind({});
stars.args = {
  rating: 3,
  active: false,
};
