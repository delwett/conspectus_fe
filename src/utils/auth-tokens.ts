const TokenKey = 'conspectus-auth'

export function setToken(token: string): void {
  localStorage.setItem(TokenKey, token)
}

export function getToken(): string | null {
  return localStorage.getItem(TokenKey)
}

export function deleteToken(): void {
  localStorage.removeItem(TokenKey)
}
