// @ts-check
const identity = require('./identity.rs/docusaurus.config');

/** @type {import('@docusaurus/types').DocusaurusConfig} */
module.exports = {
    title: 'Build',
    url: '/',
    baseUrl: '/',
    themes: ['@docusaurus/theme-classic'],
    plugins: [...identity.plugins],
    staticDirectories: [...identity.staticDirectories],
};