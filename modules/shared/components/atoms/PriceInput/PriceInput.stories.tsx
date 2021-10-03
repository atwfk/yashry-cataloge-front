import type { ReactElement } from "react";
import type { Story } from "@storybook/react";
import PriceInput from "./PriceInput";
import { IPriceInput } from "./IPriceInput";

const args = {
  title: "Atoms/PriceInput",
  component: PriceInput,
};

export default args;

const Template: Story<IPriceInput.IProps> = (args): ReactElement => (
  <PriceInput {...args} />
);

export const priceInput = Template.bind({});
priceInput.args = {
  minPrice: 60,
  maxPrice: 150,
  from: 90,
  to: 120,
};
