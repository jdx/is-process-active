import validate from './validate'

export function isActive(pid: number): Promise<boolean> {
  return Promise.resolve(isActiveSync(pid))
}

export function isActiveSync(pid: number): boolean {
  if (!validate(pid)) return false
  try {
    return !!process.kill(pid, 0)
  } catch (e) {
    if (e.code === 'EPERM') return true
    if (e.code === 'ESRCH') return false
    throw e
  }
}
