import * as pid from '../src'

const skipIfWindows = process.platform === 'win32' ? test.skip : test

const kill = process.kill

afterEach(() => {
  process.kill = kill
})

test('sync active', () => {
  expect(pid.isActiveSync(process.pid)).toEqual(true)
})

test('sync inactive', () => {
  expect(pid.isActiveSync(process.pid * 1000)).toEqual(false)
})

test('async active', () => {
  return expect(pid.isActive(process.pid)).resolves.toEqual(true)
})

test('async inactive', () => {
  return expect(pid.isActive(process.pid * 10000)).resolves.toEqual(false)
})

skipIfWindows('init', () => {
  return expect(pid.isActive(1)).resolves.toEqual(true)
})

test('0', () => {
  return expect(pid.isActive(0)).resolves.toEqual(false)
})

test('-1', () => {
  return expect(pid.isActive(-1)).resolves.toEqual(false)
})

test('string', () => {
  return expect(pid.isActive('foobar' as any)).resolves.toEqual(false)
})

skipIfWindows('kill errors', () => {
  process.kill = () => { throw new Error('uh oh!') }
  expect(() => {
    pid.isActive(1)
  }).toThrowError('uh oh!')
})
