is-process-active
=================

[![Greenkeeper badge](https://badges.greenkeeper.io/jdxcode/is-process-active.svg)](https://greenkeeper.io/)

[![CircleCI](https://circleci.com/gh/jdxcode/is-process-active/tree/master.svg?style=svg)](https://circleci.com/gh/jdxcode/is-process-active/tree/master)
[![Build status](https://ci.appveyor.com/api/projects/status/fyhxf3w8gyqxv0ou/branch/master?svg=true)](https://ci.appveyor.com/project/Heroku/is-process-active/branch/master)
[![codecov](https://codecov.io/gh/jdxcode/is-process-active/branch/master/graph/badge.svg)](https://codecov.io/gh/jdxcode/is-process-active)
[![npm](https://img.shields.io/npm/v/is-process-active.svg)](https://npmjs.org/package/is-process-active)
[![npm](https://img.shields.io/npm/dw/is-process-active.svg)](https://npmjs.org/package/is-process-active)
[![npm](https://img.shields.io/npm/l/is-process-active.svg)](https://github.com/jdxcode/is-process-active/blob/master/package.json)
[![David](https://img.shields.io/david/jdxcode/is-process-active.svg)](https://david-dm.org/jdxcode/is-process-active)

Cross-platform support for detecting if a process pid is active. Uses `process.kill(pid, 0)` on unix and `tasklist.exe` on Windows.

This method is extremely fast on Unix and the fastest I'm aware of for Windows.

**Usage**:

```js
const pid = require('is-process-active')
if (pid.activeSync(myPid)) {
  // do something if process is active
}

// or...

if (await pid.active(myPid)) {
  // do something if process is active
}
```

Note that on Unix it is [always synchronous](https://github.com/jdxcode/is-process-active/blob/master/src/unix.ts#L5). So if you never have to support Windows there is no reason to use the async version.
