#!/usr/bin/env node

// Yarn will fail to link workspace binaries if they haven't been built yet. Add
// a simple JS file to forward to the CLI which is built after install.
require('./src/cli');
