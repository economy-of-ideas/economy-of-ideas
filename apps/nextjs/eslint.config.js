import baseConfig, { restrictEnvAccess } from "@eoi/eslint-config/base";
import nextjsConfig from "@eoi/eslint-config/nextjs";
import reactConfig from "@eoi/eslint-config/react";

/** @type {import('typescript-eslint').Config} */
export default [
  {
    ignores: [".next/**"],
  },
  ...baseConfig,
  ...reactConfig,
  ...nextjsConfig,
  ...restrictEnvAccess,
];
