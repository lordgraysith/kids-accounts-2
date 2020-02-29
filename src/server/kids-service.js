// const { GREETING } = process.env;
import { map } from 'lodash'
import { query } from './db'
import { objectifyProperties } from './utils'
export async function getKids() {
  const kids = await query('SELECT id, name FROM "kids-accounts".kids')
  return map(kids, objectifyProperties)
}
