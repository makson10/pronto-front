import { PrismaAdapter } from '@auth/prisma-adapter';
import NextAuth from 'next-auth';
import Credentials from 'next-auth/providers/credentials';
import Google from 'next-auth/providers/google';
import { prisma } from '../../prisma/prisma';

export const { handlers, signIn, signOut, auth } = NextAuth({
	providers: [
		Credentials({
			credentials: {
				email: {},
				password: {},
			},
			// authorize: async (credentials) => {
			//     console.log(credentials);
			// }
		}),
		Google,
	],
	adapter: PrismaAdapter(prisma),
	callbacks: {
		async session({ session, token, user, newSession }) {
			console.log(session);
			console.log(token);
			console.log(user);
			console.log(newSession);

			return session;
		},
	},
});
