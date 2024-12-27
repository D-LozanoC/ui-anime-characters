export default function createCustomError(name: string, message: string): Error {
  const error = new Error(message)
  error.name = name

  return error
}