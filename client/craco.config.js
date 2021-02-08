const path = require("path");

const alias = (prefix = "src") => ({
  "@components": `${prefix}/components`,
  "@hooks": `${prefix}/hooks`,
  "@store": `${prefix}/store`,
  "@theme": `${prefix}/theme`,
});

const resolvedAliases = Object.fromEntries(
  Object.entries(alias()).map(([key, value]) => [
    key,
    path.resolve(__dirname, value),
  ])
);

module.exports = { webpack: { alias: resolvedAliases } };
