import { spawn, spawnSync } from 'child_process'

import debug from './debug'
import validate from './validate'

// no header, format: CSV, filter
const args = (pid: number) => ['/NH', '/FO', 'CSV', '/FI', `PID eq ${pid}`]
const spawnOptions = {
  stdio: [0, null, 2],
  encoding: 'utf8',
}

export function isActive(pid: number): Promise<boolean> {
  return new Promise((resolve, reject) => {
    if (!validate(pid)) return resolve(false)
    debug('tasklist', args(pid))
    const p = spawn('tasklist', args(pid), spawnOptions)
    p.on('close', code => {
      if (code !== 0) reject(new Error(`tasklist exited with code ${code}`))
    })
    p.stdout.on('data', (stdout: string) => {
      resolve(!stdout.includes('No tasks are running'))
    })
  })
}

export function isActiveSync(pid: number): boolean {
  if (!validate(pid)) return false
  debug('tasklist sync', args(pid))
  const result = spawnSync('tasklist', args(pid), spawnOptions)
  if (result.error) throw result.error
  if (result.status !== 0) throw new Error(`tasklist exited with code ${status}`)
  return !result.stdout.includes('No tasks are running')
}
