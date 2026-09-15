import type { Config } from "prettier";

type Override = Exclude<Config["overrides"], undefined>[number];

const typescript: Override = {
  files: ["*.ts"],
  options: {
    requirePragma: true,
  },
};

const markdown: Override = {
  files: ["*.md"],
  options: {
    printWidth: 80,
    proseWrap: "always",
  },
};

const license: Override = {
  files: ["LICENSE.md"],
  options: {
    printWidth: 70,
  },
};

const github: Override = {
  files: [".github/**/*.md"],
  options: {
    printWidth: 250,
  },
};

const config: Config = {
  overrides: [typescript, markdown, license, github],
};

export default config;
