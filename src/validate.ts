export default function validate(pid: number): boolean {
  return !!(pid && !isNaN(pid) && pid > 0)
}
