# del-expire-file
delete expired file。

[![Build Status](https://travis-ci.org/wulv/del-expired-file.png)](https://travis-ci.org/wulv/del-expired-file)
[![npm version](https://img.shields.io/npm/v/del-expired-file.svg?style=flat)](https://www.npmjs.com/package/del-expired-file)
[![downloads](https://img.shields.io/npm/dt/del-expired-file.svg)]()
### Installation
```
npm install del-expired-file --save
```

### Usage
```js
'use strict';

const path = require('path');
const delExpiredFile = require('del-expired-file');

const filesPath = path.resolve('./');
delExpiredFile({
  filePath: filesPath,
  ext: 'txt',
  expiredType: 'ctime',
  date: '5s',
})
  .then((res) => {
    console.log('delete file', res);
  });
// ['a.txt', 'b.txt']
```

### Api
- `options` `<Object>`
  - `filePath` `<string>`: default is `pwd`
  - `ext` `<string>`
  - `expiredType` `<string>`: [`ctime`, `atime`, `mtime`], default is `ctime`
  - `date` `string`: [`3d`, `5h`, `6m`, `30s`], default is `3d`