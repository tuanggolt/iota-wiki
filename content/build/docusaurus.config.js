// @ts-check
const identity = require('./identity.rs/docusaurus.config');
const hornet = require('./hornet/docusaurus.config');

/** @type {import('@docusaurus/types').DocusaurusConfig} */
module.exports = {
    title: 'Build',
    url: '/',
    baseUrl: '/',
    themes: ['@docusaurus/theme-classic'],
    plugins: [...identity.plugins, ...hornet.plugins],
    staticDirectories: [...identity.staticDirectories, ...hornet.staticDirectories],
};