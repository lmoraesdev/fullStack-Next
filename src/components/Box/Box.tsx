import { BaseComponent } from "@src/theme/BaseComponent";
import { StyleSheet } from "@src/theme/StyleSheet";
import React from "react";

interface BoxProps {
  // resolver depois da tag
  children?: React.ReactNode;
  tag?: any;
  styleSheet?: StyleSheet;
}

export default function Box({ styleSheet, children, tag, ...props }: BoxProps) {
  const Tag = tag || "div";
  return (
    <BaseComponent as={Tag} styleSheet={styleSheet} {...props}>
      {children}
    </BaseComponent>
  );
}
