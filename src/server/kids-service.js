// const { GREETING } = process.env;
function getKids() {
  return [
    {
      id: 1,
      name: "Karli",
      mainAccount: {
        id: 1,
        kidId: 1,
        accountTypeId: 1,
        accountType: "Main",
        balance: 100
      }
    },
    {
      id: 2,
      name: "Jack",
      mainAccount: {
        id: 2,
        kidId: 2,
        accountTypeId: 1,
        accountType: "Main",
        balance: 100
      }
    }
  ]
}

module.exports = {
  getKids
}