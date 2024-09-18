import GithubProvider from 'next-auth/providers/github';
import GoogleProvider from "next-auth/providers/google";
import { PrismaAdapter } from "@next-auth/prisma-adapter"
import { db } from './db';



export const authOptions = {
  adapter: PrismaAdapter(db),
  secret:process.env.NEXTAUTH_SECRET,
  session: {
    strategy: 'jwt',
  },
  pages: {
    signIn: "/sign-in",
  },
  providers: [
    GithubProvider({
      clientId: process.env.GITHUB_ID as string,
      clientSecret: process.env.GITHUB_SECRET as string,
    }),
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID as string,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET as string,
    })
  ],
  callbacks: {
    async jwt({ token, user}: any) {
      if(user) {
        return {
          ...token,
          name: user.name
        }
      }
      return token
    },
    async session({ session, token }: any) {
      return {
        ...session,
        user: {
          ...session.user,
          name: token.name
        }
      }
    },
  }
}
