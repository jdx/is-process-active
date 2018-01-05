import debug from './debug'
import validate from './validate'

export function isActive(pid: number): Promise<boolean> {
  return Promise.resolve(isActiveSync(pid))
}

export function isActiveSync(pid: number): boolean {
  if (!validate(pid)) return false
  try {
    debug('isActive', pid)
    const result = process.kill(pid, 0)
    debug('isActive', result)
    return !!result
  } catch (e) {
    debug('isActive', e)
    if (e.code === 'EPERM') return true
    if (e.code === 'ESRCH') return false
    throw e
  }
}
