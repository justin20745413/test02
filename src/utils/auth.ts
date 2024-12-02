export const isAuthenticated = (): boolean => {
  return !!localStorage.getItem('token')
}

export const logout = (): void => {
  localStorage.removeItem('token')
  window.location.href = '/login'
} 