import type { ReactElement } from "react";
import type { Story } from "@storybook/react";
import Products from "./Products";
import { IData } from "@modules/shared/types/IData";
import { mockedProducts } from "./mockedProducts";

const args = {
  title: "Organisms/Products",
  component: Products,
};

export default args;

const Template: Story<{ products: IData.IProduct[] }> = (
  args,
): ReactElement => (
  <div className="flex">
    <Products {...args} />
  </div>
);

export const products = Template.bind({});
products.args = {
  products: mockedProducts,
};
