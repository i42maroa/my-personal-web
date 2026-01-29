import next from "eslint-config-next";

const eslint = [
  {
    ignores: ["node_modules/**", ".next/**"]
  },
  ...next
];

export default eslint;