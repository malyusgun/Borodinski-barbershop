import users from "@/data/users";
import { AuthOptions, User } from "next-auth";
import Credentials from "next-auth/providers/credentials";
// import GoogleProvider from 'next-auth/providers/google'
export const authConfig: AuthOptions = {
  providers: [
    // GoogleProvider({
    //   clientId: '',
    //   clientSecret: ''
    // }),
    //? Нужно было зарегистрироваться в Google Cloud, но он благополучно запрещён на территории матушки-России
    Credentials({
      credentials: {
        email: { label: 'email', type: 'email', required: true},
        password: { label: 'password', type: 'password', required: true}
      },
      async authorize(credentials) {
        if (!credentials?.email || !credentials.password) return null

        const currentUser = users.find(user => user.email === credentials.email)
        if (currentUser && currentUser.password === credentials.password) {
          const {password, ...userWithoutPass} = currentUser
          console.log('Authorized User:', userWithoutPass);
          return userWithoutPass as User
        }

        return null
      }
    })
  ],
}