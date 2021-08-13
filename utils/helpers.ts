export function getRandomString (length?: number): string {
  if (!length) {
    length = 12
  }
  const allowedChars =
      'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789'
  const result = []
  for (let i = 0; i < length; i++) {
    result.push(
      allowedChars.charAt(Math.floor(Math.random() * allowedChars.length))
    )
  }
  return result.join('')
}
