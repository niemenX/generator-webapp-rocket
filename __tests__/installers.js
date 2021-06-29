'use strict'
const path = require('path')
const assert = require('yeoman-assert')
const helpers = require('yeoman-test')

jest.setTimeout(30000);

describe('test package installers', () => {
    const projectName = 'test'
    const gqlPort = '4000'

    const npm = '>= 7.16.0';
    const yarn = '>= 1.22.4';

    it('installs packages with npm', () => helpers
        .create(path.join(__dirname, '../generators/app'))
        .withPrompts({
            projectName,
            gqlPort,
            withMultiTenancy: true,
            addSubscriptions: true,
            addMessaging: false,
            withRights: true,
            addGqlLogging: true,
            addHelm: true,
            addTracing: true,
            identityApiUrl: "",
            identityOpenIdConfig: "",
            identityAuthority: 'localhost:5000',
            packageManager: 'npm'
        })
        .run()
        .then((_gen) => {
            assert.jsonFileContent(`${projectName}/package.json`, {
                name: projectName,
                engines: { npm }
            })
        })
    )

    it('installs packages with yarn', () => helpers
        .create(path.join(__dirname, '../generators/app'))
        .withPrompts({
            projectName,
            gqlPort,
            withMultiTenancy: true,
            addSubscriptions: true,
            addMessaging: false,
            withRights: true,
            addGqlLogging: true,
            addHelm: true,
            addTracing: true,
            identityApiUrl: "",
            identityOpenIdConfig: "",
            identityAuthority: 'localhost:5000',
            packageManager: 'yarn'
        })
        .run()
        .then((_gen) => {
            assert.jsonFileContent(`${projectName}/package.json`, {
                name: projectName,
                engines: { yarn }
            })
        })
    )
})
