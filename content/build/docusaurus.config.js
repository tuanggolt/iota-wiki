// @ts-check
// eslint-disable-next-line @typescript-eslint/no-var-requires
const bee = require('./bee/docusaurus.config');
const chronicle = require('./chronicle.rs/docusaurus.config');
const chrysalis_docs = require('./chrysalis-docs/docusaurus.config');

/** @type {import('@docusaurus/types').DocusaurusConfig} */
module.exports = {
    title: 'Build',
    url: '/',
    baseUrl: '/',
    themes: ['@docusaurus/theme-classic'],
    plugins: [
        ...bee.plugins, 
        ...chronicle.plugins,
        ...chrysalis_docs.plugins
    ],
    staticDirectories: [
        ...bee.staticDirectories,
        ...chronicle.staticDirectories,
        ...chrysalis_docs.staticDirectories
    ],
};