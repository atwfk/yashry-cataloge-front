import type { ReactElement } from "react";
import type { Story } from "@storybook/react";
import Product from "./Product";
import { IData } from "@modules/shared/types/IData";

const args = {
  title: "Molecules/Product",
  component: Product,
};

export default args;

const Template: Story<IData.IProduct> = (args): ReactElement => (
  <div className="flex">
    <Product {...args} />
  </div>
);

export const product = Template.bind({});
product.args = {
  price: 614,
  id: 1,
  name: "andcrafted Cotton Keyboard",
  image: "http://placeimg.com/640/480/cats",
  rating: 4,
};
