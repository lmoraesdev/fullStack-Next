import React from "react";
import styled from "styled-components";
import { StyleSheet } from "@src/theme/StyleSheet";
import { parseStyleSheet } from "@skynexui/responsive_stylesheet";

interface StyledBaseComponentProps {
  styleSheet?: StyleSheet;
}

const StyledBaseComponent = styled.div.withConfig({
  shouldForwardProp: (prop) => prop !== "styleSheet",
})<StyledBaseComponentProps>`
  ${({ styleSheet }) => parseStyleSheet(styleSheet)}
`;

export const BaseComponent = (props) => {
  return <StyledBaseComponent {...props} />;
};

BaseComponent.defaultProps = {
  styleSheet: {},
};
