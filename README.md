# cypress_example

This is an example project. Fun only.

## Description

Example repository using Cypress, contains some very short, basic API and UI tests. Serves mostly for fun and as a learning step for the author. 

## Instructions on usage
- fork this repository, preferably using SSH
- clone your forked repository into desired project folder
- create cypress.env.json based on the example file in project and add your login data
- go wild


## Installation

```bash
npm install cypress --save-dev
```
or through yarn, pnpm or direct download

NOTE: If you are using NixOS, install through yarnpkg
### NixOS
```bash
yarnpkg add cypress
```

NOTE: If you're using Linux, you'll want to have the required dependencies installed on your system.
### Ubuntu/Debian
```bash
apt-get install libgtk2.0-0 libgtk-3-0 libgbm-dev libnotify-dev libgconf-2-4 libnss3 libxss1 libasound2 libxtst6 xauth xvfb
```
### CentOS 
```bash
yum install -y xorg-x11-server-Xvfb gtk2-devel gtk3-devel libnotify-devel GConf2 nss libXScrnSaver alsa-lib
```
### Amazon Linux 2023
```bash
dnf install -y xorg-x11-server-Xvfb gtk3-devel nss alsa-lib
```
