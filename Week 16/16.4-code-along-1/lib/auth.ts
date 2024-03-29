import CredentialsProvider from "next-auth/providers/credentials";
import GitHubProvider from "next-auth/providers/github"

export const NEXT_AUTH = {
    providers: [
        GitHubProvider({
            clientId: process.env.GITHUB_ID || "",
            clientSecret: process.env.GITHUB_SECRET || ""
          }),
        CredentialsProvider({
            name: 'email',
            credentials: {
                username: {
                    label: 'email', 
                    type: 'text',
                    placeholder: 'Username'
                },
                password: {
                    label: 'password',
                    type: 'password',
                    placeholder: 'Password'
                }
            },
            async authorize(credentials) {
                return {
                    id: "user1",
                    email: credentials?.username,
                };
            },
        })
    ],
    secret: process.env.NEXTAUTH_SECRET,
    callbacks : {
        jwt : ({token} : {token : string}) => {
            console.log(token)
            return token
        },
        session: ({session, token, user}) => {
            if(session && session.user )
                session.user.id = token.sub

            return session
        }
    },
    pages: {
        signIn: '/signin'
    }
}