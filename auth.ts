import NextAuth, { DefaultSession, User } from "next-auth";
import GitHub from "next-auth/providers/github";
import Credentials from "next-auth/providers/credentials";
import { Role } from "./src/utils/constants";
import "next-auth/jwt";

declare module "next-auth" {
  /**
   * Returned by `auth`, `useSession`, `getSession` and received as a prop on the `SessionProvider` React Context
   */
  interface Session {
    user: {
      id?: string;
      email?: string;
      role: string;
      firstname?: string;
      lastname?: string;
      /**
       * By default, TypeScript merges new interface properties and overwrites existing ones.
       * In this case, the default session user properties will be overwritten,
       * with the new ones defined above. To keep the default session user properties,
       * you need to add them back into the newly declared interface.
       */
    } & DefaultSession["user"];
  }

  interface User {
    id?: string;
    email?: string | null;
    role: string;
    firstname?: string;
    lastname?: string;
  }
}

declare module "next-auth/jwt" {
  interface JWT {
    id?: string;
    email?: string;
    role: string;
  }
}

export const { handlers, signIn, signOut, auth } = NextAuth({
  session: { strategy: "jwt" },
  pages: {
    signIn: "/auth/login",
  },
  providers: [
    GitHub,
    Credentials({
      credentials: {
        email: {},
        password: {},
      },
      authorize: async (credentials) => {
        const admin: User = {
          id: "id",
          email: "admin@email.com",
          role: Role.ADMIN,
          firstname: "firstname",
          lastname: "lastname",
        };
        if (
          credentials.email === "admin@email.com" &&
          credentials.password === "admin"
        ) {
          return admin;
        }

        return null;
      },
    }),
  ],
  callbacks: {
    async authorized({ auth }) {
      return !!auth;
    },

    async jwt({ token, user }) {
      if (user) {
        token.id = user.id;
        token.role = user.role;
      }
      return token;
    },

    async session({ session, token }) {
      if (token.id) {
        session.user.id = token.id;
        session.user.role = token.role;
      }
      return session;
    },
  },
});
