import bcrypt from 'bcrypt';
import { AuthOptions } from 'next-auth';
import CredentialsProvider from 'next-auth/providers/credentials';
import GoogleProvider from 'next-auth/providers/google';
import { PrismaAdapter } from '@next-auth/prisma-adapter';

import client from '@/lib/client';

const authOptions: AuthOptions = {
    adapter: PrismaAdapter(client),
    providers: [
        GoogleProvider({
            clientId: process.env.GOOGLE_CLIENT_ID!,
            clientSecret: process.env.GOOGLE_CLIENT_SECRET!,
        }),
        CredentialsProvider({
            name: 'credentials',
            credentials: {
                email: { label: 'email', type: 'text' },
                password: { label: 'password', type: 'password' },
            },
            authorize: async (credentials) => {
                try {
                    if (!credentials?.email || !credentials?.password)
                        return null;

                    const user = await client.user.findUnique({
                        where: { email: credentials?.email },
                    });

                    if (!user || !user?.hashedPassword) return null;

                    const correctPassword = await bcrypt.compare(
                        credentials.password,
                        user.hashedPassword,
                    );

                    if (!correctPassword) return null;
                    return user;
                } catch (error) {
                    return null;
                }
            },
        }),
    ],
    debug: true,
    session: { strategy: 'jwt' },
    secret: process.env.NEXTAUTH_SECRET,
};

export default authOptions;
