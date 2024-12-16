import readYamlFile from "read-yaml-file/index";
import path from "path";

export interface TemplateConfig {
  site?: {
    title?: string;
    description: string;
  };
  personal?: {
    name?: string;
    avatar?: string;
    socialNetworks: {
      linkedin: string;
      github: string;
    };
  };
}

export async function withTempleteConfig(props = {}) {
  const PATH_CONFIG = path.resolve(".", "config.yml");
  const templateConfig = await readYamlFile<TemplateConfig>(PATH_CONFIG);
  return {
    templateConfig,
    ...props,
  };
}
