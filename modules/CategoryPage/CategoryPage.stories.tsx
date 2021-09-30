import React from "react";
import type { Story, Meta } from "@storybook/react";
import CategoryPage from "./CategoryPage";

export default {
  title: "TS/CategoryPage",
  component: CategoryPage,
} as Meta;

const Template: Story = (args) => <CategoryPage {...args} />;

export const textInput = Template.bind({});
