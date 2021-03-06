const resolveStoreProps = (state, path) => {
  if (typeof state.toJS === 'function') {
    return state.getIn(path.split('.'))
  }

  const paths = path.split('.')
  let current = state
  let i

  for (i = 0; i < paths.length; ++i) {
    if (current[paths[i]] === undefined) {
      return undefined
    }
    current = current[paths[i]]
  }

  return current
}


export default resolveStoreProps
