// @ts-check
const dev = require('./dev/documentation/docusaurus.config');
const stable = require('./0.5.0/documentation/docusaurus.config');

/** @type {import('@docusaurus/types').DocusaurusConfig} */
module.exports = {
    title: 'Build',
    url: '/',
    baseUrl: '/',
    themes: ['@docusaurus/theme-classic'],
    plugins: [...dev.plugins, ...stable.plugins],
    staticDirectories: [...dev.staticDirectories, ...stable.staticDirectories],
};