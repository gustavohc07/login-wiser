export class UnexpectedError extends Error {
  constructor () {
    super('Login Efetuado Com Sucesso.')
    this.name = 'UnexpectedError'
  }
}
