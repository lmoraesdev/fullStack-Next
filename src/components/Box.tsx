import React from "react";

interface StyleSheet {
  fontFamily: string;
}

interface BoxProps {
  // resolver depois da tag
  children: React.ReactNode;
  tag: any;
  styleSheet: StyleSheet;
}

export default function Box({ styleSheet, children, tag }: BoxProps) {
  const Tag = tag || "div";
  return <Tag style={styleSheet}>{children}</Tag>;
}
