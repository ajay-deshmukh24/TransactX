import { PrismaClient } from "@repo/db/client";
import CredentialsProvider from "next-auth/providers/credentials";
import bcrypt from "bcrypt";
import dotenv from "dotenv";
dotenv.config();

const client = new PrismaClient();

export const authOptions = {
  providers: [
    CredentialsProvider({
      name: "Credentials",
      credentials: {
        phone: {
          label: "Phone number",
          type: "text",
          placeholder: "1231231231",
        },
        email: {
          label: "Email",
          type: "text",
          placeholder: "johndoe@gmail.com",
        },
        password: { label: "Password", type: "password" },
      },

      // TODO: User credentials type from next-aut
      async authorize(credentials: any) {
        // console.log(process.env.JWT_SECRET);
        const hashedPassword = await bcrypt.hash(credentials.password, 10);
        const existingUser = await client.user.findFirst({
          where: {
            number: credentials.phone,
          },
        });

        if (existingUser) {
          const passwordValidation = await bcrypt.compare(
            credentials.password,
            existingUser.password
          );

          if (passwordValidation) {
            return {
              id: existingUser.id.toString(),
              name: existingUser.name,
              email: existingUser.email,
            };
          }

          return null;
        }

        try {
          const user = await client.user.create({
            data: {
              number: credentials.phone,
              email: credentials.email,
              password: hashedPassword,
            },
          });

          return {
            id: user.id.toString(),
            name: user.name,
            email: user.email,
          };
        } catch (e) {
          console.error(e);
        }

        return null;
      },
    }),
  ],
  secret: process.env.NEXTAUTH_SECRET || "secret",
  callbacks: {
    // TODO: can u fix the type here? Using any is bad
    async session({ token, session }: any) {
      session.user.id = token.sub;
      return session;
    },
  },
};
