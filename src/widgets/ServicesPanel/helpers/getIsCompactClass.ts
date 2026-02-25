export function getIsCompactClass(isCompact: boolean, cls: Record<string, string>) {
  return {
    [cls.isCompact]: isCompact
  }
}