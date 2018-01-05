export default function validate(pid: number): boolean {
  if (!pid || isNaN(pid) || pid < 0) {
    process.emitWarning(`is-process-active: expected number, received: ${typeof pid} ${pid}`)
    return false
  }
  return true
}
