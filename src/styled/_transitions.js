export const defaultTransition = (...args) => {
  const TIMING = 0.15
  const EASE = 'ease-in-out'
  if (args && args.length === 1) {
    return `${args[0]} ${TIMING}s ${EASE}`
  }
  if (args && args.length > 1) {
    return `${args.join(` ${TIMING}s, `)} ${TIMING}s ${EASE}`
  }
  return `all ${TIMING}s ${EASE}`
}
