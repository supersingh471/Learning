import NextAuth from "next-auth/next";
import CredentialsProvider from "next-auth/providers/credentials";
import GoogleProvider from "next-auth/providers/google";

const handler = NextAuth({
	providers: [
		CredentialsProvider({
			name: "Email",
			credentials: {
				username: { label: "Username", type: "text", placeholder: "mrsingh@gmail.com" },
				password: { label: "password", type: "password" }
			},
			async authorize(credentials, req) {
				const username = credentials?.username;
				const password = credentials?.password;
				console.log(username);
				console.log(password);
				//DB request to check if user and password are correct
				const user = {
					name: "vikash",
					id: "1",
					username: "Vikassingh471@gmail.com"
				}

				if (user) {
					return user
				} else {
					return null
				}
			}
		}),

		GoogleProvider({
			clientId: "vikas",
			clientSecret: "singh"
		}),
	]
})

export { handler as GET, handler as POST } 