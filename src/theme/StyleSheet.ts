import { Breakpoints } from "@skynexui/responsive_stylesheet";

type ResponsiveProperty<Type> = Partial<Record<Breakpoints, Type>>;

export interface StyleSheet {
  fontFamily?: ResponsiveProperty<string> | string;
  backgroundColor?: ResponsiveProperty<string> | string;
}
