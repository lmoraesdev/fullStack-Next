import React from "react";
import Box from "../Box/Box";
import theme from "@src/theme/theme";

interface TextProps {
  tag?: "p" | "li" | "h1" | String;
  children?: React.ReactNode;
}

export default function Text(props: TextProps) {
  return (
    <Box styleSheet={{ fontFamily: theme.typography.fontFamily }} {...props} />
  );
}

Text.defaultProps = {
  tag: "p",
};
