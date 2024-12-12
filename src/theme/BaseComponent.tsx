import React from "react";
import styled from "styled-components";
import { StyleSheet } from "@src/theme/StyleSheet";
import { parseStyleSheet } from "@skynexui/responsive_stylesheet";

interface StyledBaseComponent {
  $styleSheet?: StyleSheet;
}

const StyledBaseComponent = styled.div<StyledBaseComponent>`
  display: flex;
  flex-direction: column;
  align-content: flex-start;
  flex-shrink: 0;
  ${({ $styleSheet = {} }) =>
    parseStyleSheet($styleSheet)}; // Define valor padrão vazio
`;

export const BaseComponent = (props) => {
  const { styleSheet, ...rest } = props; // Extrai styleSheet para não passá-lo ao DOM
  return <StyledBaseComponent $styleSheet={styleSheet} {...rest} />;
};

BaseComponent.defaultProps = {
  styleSheet: {}, // Garante que styleSheet sempre tenha um valor padrão
};
