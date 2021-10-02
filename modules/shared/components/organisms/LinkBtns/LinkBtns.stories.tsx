import type { ReactElement } from "react";
import type { Story } from "@storybook/react";
import LinkBtns from "./LinkBtns";
import type { ILinkBtns } from "./ILinkBtns";
import { mockedLinks } from "./mockedLinks";

const args = {
  title: "Organisms/LinkBtns",
  component: LinkBtns,
  argTypes: {},
};

export default args;

const Template: Story<ILinkBtns.IProps> = (args): ReactElement => (
  <LinkBtns {...args} />
);

export const linkBtns = Template.bind({});
linkBtns.args = {
  links: mockedLinks,
};
