// @ts-check
const dev = require('./develop/documentation/docusaurus.config');
const stable = require('./mainnet/documentation/docusaurus.config');

/** @type {import('@docusaurus/types').DocusaurusConfig} */
module.exports = {
    title: 'Hornet',
    url: '/',
    baseUrl: '/',
    themes: ['@docusaurus/theme-classic'],
    plugins: [...dev.plugins, ...stable.plugins],
    staticDirectories: [...dev.staticDirectories, ...stable.staticDirectories],
};