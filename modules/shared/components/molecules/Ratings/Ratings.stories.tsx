import type { ReactElement } from "react";
import type { Story } from "@storybook/react";
import Ratings from "./Ratings";
import { IRatings } from "./IRatings";

const args = {
  title: "Molecules/Ratings",
  component: Ratings,
};

export default args;

const Template: Story<IRatings.IProps> = (args): ReactElement => (
  <div className="flex">
    <Ratings {...args} />
  </div>
);

export const ratings = Template.bind({});
ratings.args = {
  ratings: [
    { id: 1, rating: 1, active: false },
    { id: 2, rating: 2, active: false },
    { id: 3, rating: 3, active: false },
  ],
};
