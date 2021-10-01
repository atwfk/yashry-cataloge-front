import type { ReactElement } from "react";
import type { Story } from "@storybook/react";
import P from "./Paragraph";
import type { IParagraph } from "./IParagraph";

const args = {
  title: "Atoms/Paragraph",
  component: P,
  argTypes: {
    fontSize: {
      options: ["xs", "sm", "md", "lg", "xl"],
      control: { type: "select" },
    },
    fontColor: {
      options: ["accent", "primary", "success", "error", "dark"],
      control: { type: "select" },
    },
    fontWeight: {
      options: ["normal", "medium", "bold"],
      control: { type: "select" },
    },
  },
};

export default args;

const Template: Story<IParagraph.IProps> = (args): ReactElement => (
  <P {...args}>normal text</P>
);

export const paragraph = Template.bind({});
paragraph.args = {
  fontSize: "md",
  fontColor: "accent",
  fontWeight: "medium",
};
