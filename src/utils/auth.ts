export const logout = (): void => {
    localStorage.removeItem('token')
    localStorage.removeItem('sessionStartTime')
    window.location.replace('/auth/login')
}
