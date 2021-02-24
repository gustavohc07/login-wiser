export class UnexpectedError extends Error {
  constructor () {
    super('Ops! Algo errado aconteceu. Tente novamente mais tarde.')
    this.name = 'UnexpectedError'
  }
}
