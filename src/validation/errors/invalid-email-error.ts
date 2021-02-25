export class InvalidEmailError extends Error {
  constructor () {
    super('Digite um e-mail válido;')
  }
}
