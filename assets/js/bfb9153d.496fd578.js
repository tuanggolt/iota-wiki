"use strict";(self.webpackChunkiota_wiki=self.webpackChunkiota_wiki||[]).push([[22443],{59273:function(e){e.exports=JSON.parse('{"pluginId":"chrysalis-docs","version":"current","label":"Next","banner":null,"badge":false,"className":"docs-version-current","isLast":true,"docsSidebars":{"mySidebar":[{"type":"link","label":"Welcome","href":"/chrysalis-docs/welcome","docId":"welcome"},{"type":"link","label":"What is Chrysalis?","href":"/chrysalis-docs/introduction/what_is_chrysalis","docId":"introduction/what_is_chrysalis"},{"type":"link","label":"Path to Chrysalis","href":"/chrysalis-docs/introduction/path_to_chrysalis","docId":"introduction/path_to_chrysalis"},{"type":"link","label":"Verify Download","href":"/chrysalis-docs/firefly/verify_download","docId":"firefly/verify_download"},{"type":"link","label":"Node Software","href":"/chrysalis-docs/node_software","docId":"node_software"},{"type":"category","label":"Libraries","items":[{"type":"link","label":"Overview","href":"/chrysalis-docs/libraries/overview","docId":"libraries/overview"},{"type":"link","label":"Client Lib","href":"/chrysalis-docs/libraries/client","docId":"libraries/client"},{"type":"link","label":"Wallet Lib","href":"/chrysalis-docs/libraries/wallet","docId":"libraries/wallet"}],"collapsible":true,"collapsed":true},{"type":"category","label":"Guides","items":[{"type":"link","label":"Overview","href":"/chrysalis-docs/guides/overview","docId":"guides/overview"},{"type":"link","label":"Developer","href":"/chrysalis-docs/guides/developer","docId":"guides/developer"},{"type":"link","label":"Exchange","href":"/chrysalis-docs/guides/exchange","docId":"guides/exchange"},{"type":"link","label":"Token Migration","href":"/chrysalis-docs/guides/token_migration","docId":"guides/token_migration"},{"type":"link","label":"Migration Mechanism","href":"/chrysalis-docs/guides/migration_mechanism","docId":"guides/migration_mechanism"},{"type":"link","label":"Hub Migration","href":"/chrysalis-docs/guides/hub_migration","docId":"guides/hub_migration"},{"type":"link","label":"Backup and Security","href":"/chrysalis-docs/guides/backup_security","docId":"guides/backup_security"},{"type":"link","label":"Chrysalis Snapshot Validation","href":"/chrysalis-docs/guides/snapshot_validation_bootstrapping","docId":"guides/snapshot_validation_bootstrapping"}],"collapsible":true,"collapsed":true},{"type":"link","label":"Mainnet","href":"/chrysalis-docs/mainnet","docId":"mainnet"},{"type":"link","label":"Devnet","href":"/chrysalis-docs/devnet","docId":"devnet"},{"type":"category","label":"Tutorials","items":[{"type":"link","label":"Private Tangle","href":"/chrysalis-docs/tutorials/one_click_private_tangle","docId":"tutorials/one_click_private_tangle"},{"type":"link","label":"Mainnet Hornet Node K8s","href":"/chrysalis-docs/tutorials/mainnet_hornet_node_k8s","docId":"tutorials/mainnet_hornet_node_k8s"}],"collapsible":true,"collapsed":true},{"type":"link","label":"Protocol TIPs","href":"/chrysalis-docs/protocol_tip","docId":"protocol_tip"},{"type":"link","label":"Resources","href":"/chrysalis-docs/resources","docId":"resources"},{"type":"link","label":"FAQ","href":"/chrysalis-docs/faq","docId":"faq"}]},"docs":{"devnet":{"id":"devnet","title":"Devnet","description":"The IOTA foundation provides load-balanced public devnet endpoints, where MQTT and the HTTP REST API are enabled.","sidebar":"mySidebar"},"faq":{"id":"faq","title":"FAQ","description":"Frequently asked questions regarding the Chrysalis implementation.","sidebar":"mySidebar"},"firefly/verify_download":{"id":"firefly/verify_download","title":"Firefly","description":"Firefly is IOTA\'s new official wallet for Chrysalis. You can verify your Firefly download on Windows, maxOS, and/or Linux.","sidebar":"mySidebar"},"guides/backup_security":{"id":"guides/backup_security","title":"Backup and Security","description":"How to back up your account, restore an account from a backup, export a user\'s Stronghold, and rekey Stronghold.","sidebar":"mySidebar"},"guides/developer":{"id":"guides/developer","title":"Developer Guide to Chrysalis","description":"This article outlines the differences between IOTA 1.0 and IOTA 1.5, aka Chrysalis.","sidebar":"mySidebar"},"guides/exchange":{"id":"guides/exchange","title":"Exchange Guide","description":"Easily integrate IOTA with your exchange, custody solution, or product using the wallet.rs library.","sidebar":"mySidebar"},"guides/hub_migration":{"id":"guides/hub_migration","title":"IOTA Hub Migration Guide","description":"How to switch from IOTA hub using wallet.rs, or its bindings.","sidebar":"mySidebar"},"guides/migration_mechanism":{"id":"guides/migration_mechanism","title":"How the IOTA Chrysalis Phase 2 Token Migration Works","description":"This page describes the migration components and mechanism used to migrate from IOTA 1.0 to IOTA 1.5 (Chrysalis).","sidebar":"mySidebar"},"guides/overview":{"id":"guides/overview","title":"IOTA Chrysalis Guides","description":"An overview of the available guides for the Chrysalis network that also outlines the changes from IOTA 1.0 to IOTA 1.5, aka Chrysalis.","sidebar":"mySidebar"},"guides/snapshot_validation_bootstrapping":{"id":"guides/snapshot_validation_bootstrapping","title":"Chrysalis Snapshot Validation/Boostrapping","description":"This page described to take part in the global snapshot.","sidebar":"mySidebar"},"guides/token_migration":{"id":"guides/token_migration","title":"Chrysalis Migration","description":"Overview on how you migrated tokens from the IOTA 1.0 to IOTA 1.5 Chrysalis network using the Firefly wallet or a migration bundle.","sidebar":"mySidebar"},"introduction/path_to_chrysalis":{"id":"introduction/path_to_chrysalis","title":"Path to Chrysalis","description":"Chrysalis was the most promising series of upgrades made to IOTA yet with increased transaction throughput, network stability, and improved usability.","sidebar":"mySidebar"},"introduction/what_is_chrysalis":{"id":"introduction/what_is_chrysalis","title":"What is Chrysalis?","description":"Specific Chrysalis Upgrades from IOTA 1.0.","sidebar":"mySidebar"},"libraries/client":{"id":"libraries/client","title":"IOTA Client Library","description":"The wallet library is a stateful library for developers who want to use IOTA for token transfers. This library has a stateful design and supports the handling and monitoring of multiple accounts and addresses.","sidebar":"mySidebar"},"libraries/overview":{"id":"libraries/overview","title":"Libraries","description":"The IOTA client libraries allow you to easily integrate IOTA into your own applications.","sidebar":"mySidebar"},"libraries/wallet":{"id":"libraries/wallet","title":"IOTA Wallet Library","description":"The official client library for interacting with the IOTA Tangle allows you to create messages and transactions, sign transactions, generate addresses, and interact with an IOTA node.","sidebar":"mySidebar"},"mainnet":{"id":"mainnet","title":"Mainnet","description":"The IOTA foundation provides load-balanced public mainnet endpoints where MQTT and the HTTP REST API are enabled.","sidebar":"mySidebar"},"node_software":{"id":"node_software","title":"Node Software","description":"Hornet is an EDF-supported community node written in Go. Bee is an IOTA Node implemented by the Foundation and written in Rust. We recommend using Hornet since it has several optional features that are not implemented in Bee.","sidebar":"mySidebar"},"protocol_tip":{"id":"protocol_tip","title":"IOTA Protocol TIPs","description":"The Chrysalis protocol changes are described in full detail in these TIPs hosted on our Github.","sidebar":"mySidebar"},"resources":{"id":"resources","title":"Resources","description":"Official and Community resources to help you develop and troubleshoot your application.","sidebar":"mySidebar"},"tutorials/mainnet_hornet_node_k8s":{"id":"tutorials/mainnet_hornet_node_k8s","title":"How to Run Iota Mainnet Hornet Nodes on a Kubernetes Environment","description":"In this tutorial, you will learn how to run IOTA mainnet Hornet nodes on a Kubernetes (K8s) environment. Kubernetes is a portable, extensible, open-source platform for managing containerized workloads and services that facilitates both declarative configuration and automation. It has a large, rapidly growing ecosystem. K8s services, support, and tools are widely available on multiple cloud providers.","sidebar":"mySidebar"},"tutorials/one_click_private_tangle":{"id":"tutorials/one_click_private_tangle","title":"Deploy Your Own Tangle \\"In One Click\\" Tutorial","description":"On this page, you will learn how to use a set of Docker-based tools and pre-configured setups to deploy a (hornet-based) Chrysalis Private Tangle in \\"one-click\\" to cloud environments or platforms.","sidebar":"mySidebar"},"welcome":{"id":"welcome","title":"Welcome","description":"Welcome to the official Chrysalis documentation","sidebar":"mySidebar"}}}')}}]);