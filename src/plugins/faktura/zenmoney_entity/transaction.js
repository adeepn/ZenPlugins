/**
 * @author Ryadnov Andrey <me@ryadnov.ru>
 */

const entity = () => {
  return {
    id: null,
    incomeBankID: null,
    incomeAccount: null,
    income: 0,
    outcomeBankID: null,
    outcomeAccount: null,
    outcome: 0,
    mcc: null,
    payee: null,
    date: null,
    opIncome: undefined,
    opIncomeInstrument: undefined,
    opOutcome: undefined,
    opOutcomeInstrument: undefined,
    latitude: undefined,
    longitude: undefined
  }
}

export {
  entity
}
