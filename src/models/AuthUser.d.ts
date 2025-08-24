export default interface AuthUser {
    accessToken: string,
    user: {
        id: string,
        email: string,
        username: string,
    },
}
