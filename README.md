is-process-active
=================

[![Build status](https://ci.appveyor.com/api/projects/status/fyhxf3w8gyqxv0ou/branch/master?svg=true)](https://ci.appveyor.com/project/Heroku/is-process-active/branch/master)
[![CircleCI](https://circleci.com/gh/jdxcode/is-process-active/tree/master.svg?style=svg)](https://circleci.com/gh/jdxcode/is-process-active/tree/master)
[![codecov](https://codecov.io/gh/jdxcode/is-process-active/branch/master/graph/badge.svg)](https://codecov.io/gh/jdxcode/is-process-active)

Cross-platform support for detecting if a process pid is active. Uses `process.kill(pid, 0)` on unix and `tasklist.exe` on Windows.

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
