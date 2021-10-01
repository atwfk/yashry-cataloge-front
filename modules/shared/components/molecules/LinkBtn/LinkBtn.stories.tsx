import type { ReactElement } from "react";
import type { Story } from "@storybook/react";
import LinkBtn from "./LinkBtn";
import type { ILinkBtn } from "./ILinkBtn";

const args = {
  title: "Molecules/LinkBtn",
  component: LinkBtn,
  argTypes: {
    active: {
      control: { type: "boolean" },
    },
  },
};

export default args;

const Template: Story<ILinkBtn.IProps> = (args): ReactElement => (
  <LinkBtn {...args}>normal text</LinkBtn>
);

export const linkBtn = Template.bind({});
linkBtn.args = {
  active: false,
  path: "",
  linkId: "1",
};
