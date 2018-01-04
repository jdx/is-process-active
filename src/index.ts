import * as Active from './unix'

const m: typeof Active = process.platform === 'win32' ? require('./windows') : require('./unix')
export = m
