// @ts-check
// eslint-disable-next-line @typescript-eslint/no-var-requires
const bee = require('./bee/docusaurus.config');
const chronicle = require('./chronicle.rs/docusaurus.config');
const chrysalis_docs = require('./chrysalis-docs/docusaurus.config');
const goshimmer = require('./goshimmer/docusaurus.config');
const hornet = require('./hornet/docusaurus.config');
const identity = require('./identity.rs/docusaurus.config');
const iota_rs = require('./iota.rs/docusaurus.config');
const streams = require('./streams/docusaurus.config');

/** @type {import('@docusaurus/types').DocusaurusConfig} */
module.exports = {
    title: 'Build',
    url: '/',
    baseUrl: '/',
    themes: ['@docusaurus/theme-classic'],
    plugins: [
        ...bee.plugins, 
        ...chronicle.plugins,
        ...chrysalis_docs.plugins,
        ...goshimmer.plugins,
        ...hornet.plugins,
        ...identity.plugins,
        ...iota_rs.plugins,
        ...streams.plugins
    ],
    staticDirectories: [
        ...bee.staticDirectories,
        ...chronicle.staticDirectories,
        ...chrysalis_docs.staticDirectories,
        ...goshimmer.staticDirectories,
        ...hornet.staticDirectories,
        ...identity.staticDirectories,
        ...iota_rs.staticDirectories,
        ...streams.staticDirectories
    ],
};