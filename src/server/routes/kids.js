const Bluebird = require('bluebird')
const auth = require('../middleware/auth')
const { getAllKids, getKidById } = require('../models/kids')
const {
  getAccountByKidIdAndType,
  getAccountsByKidId,
  getAccountWithTransactionsById
} = require('../models/accounts')
const { accountTypes } = require('../models/account-types')
router.use(auth)

const allKids = async (event) => {
  const kids = await getAllKids()
  const kidsWithMain = await Bluebird.reduce(
    kids,
    async (result, kid) => {
      const mainAccount = await getAccountByKidIdAndType(
        kid.id,
        accountTypes.MAIN
      )
      return result.concat([Object.assign({}, kid, { mainAccount })])
    },
    []
  )
  res.send(kidsWithMain)
};
const kidById = async (event) => {
    const kid = await getKidById(req.params.id)
    const mainAccount = await getAccountByKidIdAndType(
      req.params.id,
      accountTypes.MAIN
    )
    res.send(Object.assign({}, kid, { mainAccount }))
  };
const accountsForKid = async (event) => {
    const kid = await getKidById(req.params.id)
    const accounts = await getAccountsByKidId(req.params.id)
    res.send(Object.assign({}, kid, { accounts }))
  };
const kidWithAccount = async (event) => {
    const kid = await getKidById(req.params.id)
    const account = await getAccountWithTransactionsById(req.params.accountId)
    res.send(Object.assign({}, kid, { account }))
  };
module.exports = {
  
}
