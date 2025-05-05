import NextAuth from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import { findUser } from "../../../lib/users";

const handler = (req, res) =>
  NextAuth(req, res, {
    providers: [
      CredentialsProvider({
        name: "Credentials",
        credentials: {
          email: { label: "Email", type: "text" },
          password: { label: "Password", type: "password" },
        },
        async authorize(credentials) {
          // First try to find user from DB or external source
          let user = findUser(credentials.email);

          // If user not found in external source, use hardcoded fallback
          if (!user && credentials.email === "dhruv@example.com") {
            user = {
              id: 1,
              name: "Dhruv Arora",
              email: "dhruv@example.com",
              password: "123456",
            };
          }

          // Check password
          if (user && user.password === credentials.password) {
            const { password, ...userWithoutPassword } = user; // Remove password before returning
            return userWithoutPassword;
          }

          return null;
        },
      }),
    ],
    pages: {
      signIn: "/auth/signin",
    },
    session: {
      strategy: "jwt",
    },
    secret: process.env.NEXTAUTH_SECRET,
  });

export default handler;
