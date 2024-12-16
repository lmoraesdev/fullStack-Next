import React from "react";
import { TemplateConfig } from "./withTempleteConfig";

const TemplateConfigContext = React.createContext<TemplateConfig>({});

interface TemplateConfigProviderProps {
  children: React.ReactNode;
  value: TemplateConfig;
}

export function TemplateConfigProvider({
  value,
  children,
}: TemplateConfigProviderProps) {
  return (
    <TemplateConfigContext.Provider value={value}>
      {children}
    </TemplateConfigContext.Provider>
  );
}

export const useTemplateConfig = () => React.useContext(TemplateConfigContext);
