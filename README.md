## Authorization via ACL Package

A npm package for users authorization via Access Control List for Node.js projects with the auth-session.

<p>
  <a href="https://www.npmjs.com/package/@juliusagency/authorization-repo-mongo" target="_blank">
    <img alt="Version" src="https://img.shields.io/npm/v/@juliusagency/authorization-repo-mongo.svg">
  </a>
  <a href="https://github.com/juliusagency/authorization-repo-mongo#readme" target="_blank">
    <img alt="Documentation" src="https://img.shields.io/badge/documentation-yes-brightgreen.svg" />
  </a>
  <a href="https://github.com/juliusagency/authorization-repo-mongo/graphs/commit-activity" target="_blank">
    <img alt="Maintenance" src="https://img.shields.io/badge/Maintained%3F-yes-green.svg" />
  </a>
  <a href="https://github.com/juliusagency/authorization-repo-mongo/blob/master/LICENSE" target="_blank">
    <img alt="License: MIT" src="https://img.shields.io/badge/License-MIT-yellow.svg" />
  </a>
</p>


### The project file system tree:

├── .github  
│   ├── workflows  
│   │   ├── ci.yaml  
│   │   └── npm.yaml  
├── .husky  
│   ├── _  
│   │   ├── .gitignore  
│   │   └── husky.sh  
│   ├── pre-commit  
│   └── pre-push  
├── src  
│   └── index.ts  
├── test  
│   └── index.test.ts  
├── .eslintrc  
├── .gitignore  
├── .prettierrc  
├── .releaserc  
├── babel.config.js  
├── jest.config.ts  
├── LICENSE  
├── package-lock.json  
├── package.json  
├── README.md  
├── tsconfig.base.json  
├── tsconfig.cjs.json  
└── tsconfig.esm.json  

### The project infrastructure

[Typescript](http://www.typescriptlang.org/),  
[ESLint](https://www.npmjs.com/package/eslint) - a static code analysis tool,     
[prettier](https://www.npmjs.com/package/prettier) - a code formatter,  
[jest](https://www.npmjs.com/package/jest) - a testing framework,  
[husky](https://www.npmjs.com/package/husky) - a tool that allows to use Git hooks,  
[rimraf](https://www.npmjs.com/package/rimraf) - a deep deletion module for node.  
[move-file-cli](https://www.npmjs.com/package/move-file-cli) - a cross-platform alternative to mv for build scripts, etc.  
[semantic-release](https://www.npmjs.com/package/semantic-release) - automates the whole package release workflow including: determining the next version number, generating the release notes, and publishing the package
[cz-conventional-changelog"]() - Prompts for conventional changelog standard. 

### Get started
#### 1. Create a package project

    Create a folder:
    ```bash
    mkdir <new-package-name>
    cd <new-package-name>
    ```
    Clone the repository:
    ```bash
    git clone https://github.com/juliusagency/authorization-repo-mongo.git .
    ```
    Install:
    ```bash
    npm install
    ```
    Activate Git hooks:
    ```bash
    npm run prepare
    ```
    Note: After the command is executed once, the Git hooks will run automatically before each commit and push.

#### 2. Write the package code , pack and tests locally:
  - Packaging:
  ```bash
  npm run pack:local
  ```
  - Testing:
  Copy path a juliusagency-{package-name}-0.0.0-development.tgz
  Install the package from root directory of a node application project:
  ```bash
  npm i juliusagency-{package-name}-0.0.0-development.tgz
  ```

#### 3. Prepare to publish the package: 
##### 3.1. [Sign up with npm](https://www.npmjs.com/signup).
##### 3.2. Sign in with your npm account in the terminal:
    ```bash
    npm login 
    follow the on-screen instructions
    ```
#### 4. Publish the package:
##### 4.1. Manual publishing:
 - Check the contents that will be included in the published version of the package:
    ```bash
    npx npm-packlist-cli
    ```
 - See what would be done when actually running the command:
    ```bash
    npm publish --dry-run
    ```
 - publish the package to npm:
    ```bash
    npm publish --access=public
    ```
    Note: --access=public is needed for scoped package (`@scope/<package-name>`) as it's private by default. If it's not scoped and doesn't have the `private` field set to `true` in `package.json` it will be public as well.
##### 4.2 Automated publishing:
    The publishing process is defined via Github Actions:
    - ci.yaml - build and tests.
    - npm.yaml - publish the package to the npm registry.
    - github.yaml - make package link to the Github registry.
    The actions runs automatically after each push and pull-request.
    Note: Before running the GitHub Actions, set this two environment variables:
        GITHUB_TOKEN – go to GitHub and select your repository. Then go to Settings/Actions/General. You should find a section called “Workflow permissions.” Ensure that “Read and write permissions” is selected for the GITHUB_TOKEN. We need this to push the newly generated package version to the repository.
        NPM_TOKEN – in your NPM account, go to the “Access Tokens” page and create a new classic token. The type of the new access token should be “Automation”. Copy the token and go to GitHub. In your repository, navigate to “Settings” and “Secrets”. Add a new repository secret named NPM_TOKEN and paste the access token you created in NPM.

### Usage the commands from the command line during the development:

Linting:
```bash
npm run lint
npm run lint:fix
```
Commit (use the command instead of git commit for write a conventional message):
```bash
npm run commit
```
Testing:
```bash
npm run test
```
Clean build output:
```bash
npm run clean
```
Build:
```bash
npm run build:esm
npm run build:cjs
npm run build
```
Prepack:
```bash
npm run prepack
```
Pack for local installation:
```bash
npm run pack:local
```

Prepare:
```bash
npm run prepare
```
Git client hooks:
```bash
.husky/pre-commit
.husky/pre-push
```
