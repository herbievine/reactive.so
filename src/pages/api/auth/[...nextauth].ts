import NextAuth, { type NextAuthOptions } from "next-auth";
import GithubProvider from "next-auth/providers/github";

// Prisma adapter for NextAuth, optional and can be removed
import { PrismaAdapter } from "@next-auth/prisma-adapter";
import { prisma } from "../../../server/db/client";
import { env } from "../../../env/server.mjs";

export const authOptions: NextAuthOptions = {
  callbacks: {
    signIn: async ({ user, account, profile }) => {
      console.log({ user, account });

      const res = await fetch("https://api.github.com/user/emails", {
        headers: {
          Authorization: `token ${account.access_token}`,
        },
      });

      const emails = (await res.json()) as {
        email: string;
        primary: boolean;
      }[];

      if (!emails || emails.length === 0) {
        return false;
      }

      const email = emails.filter((email) => email.primary)[0]?.email;

      if (!email || email !== env.GITHUB_EMAIL) {
        return false;
      }

      profile.email = email;

      return true;
    },
    session({ session, user }) {
      if (session.user) {
        session.user.id = user.id;
      }
      return session;
    },
  },
  adapter: PrismaAdapter(prisma),
  providers: [
    GithubProvider({
      clientId: env.GITHUB_CLIENT_ID,
      clientSecret: env.GITHUB_CLIENT_SECRET,
    }),
  ],
};

export default NextAuth(authOptions);
