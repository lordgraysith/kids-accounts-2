import { reduce } from 'lodash'
import camel from 'to-camel-case'
export function wrapAsync (asyncFunc) {
  return (req, res, next) => {
    asyncFunc(req, res).then(() => next()).catch(ex => next(ex))
  }
}

export function objectifyProperties (obj) {
  if (!obj) return obj
  return reduce(
    Object.keys(obj),
    (newObj, key) => {
      return Object.assign(newObj, {
        [camel(key)]: obj[key]
      })
    },
    {}
  )
}

