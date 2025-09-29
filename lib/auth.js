import NextAuth from 'next-auth'
import CredentialsProvider from 'next-auth/providers/credentials'

export const authOptions = {
  providers: [
    CredentialsProvider({
      name: 'credentials',
      credentials: {
        email: { label: 'Email', type: 'email' },
        password: { label: 'Password', type: 'password' },
        role: { label: 'Role', type: 'text' }
      },
      async authorize(credentials) {
        const { email, password, role } = credentials
        
        const apiEndpoints = {
          // user: '/user/userLogin',
          // doctor: '/doctor/login',
          // laboratory: '/laboratory/login'
          user: '/',
          doctor: '/',
          laboratory: '/'
        }
        
        try {
          const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}${apiEndpoints[role]}`, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ email, password })
          })
          
          const data = await response.json()
          
          if (response.ok && data.user) {
            return {
              id: data.user.id,
              email: data.user.email,
              name: data.user.name,
              phone: data.user.phone,
              address: data.user.address,
              role: role
            }
          }
          return null
        } catch (error) {
          return null
        }
      }
    })
  ],
  callbacks: {
    async jwt({ token, user }) {
      if (user) {
        token.role = user.role
        token.phone = user.phone
        token.address = user.address
      }
      return token
    },
    async session({ session, token }) {
      session.user.id = token.sub
      session.user.role = token.role
      session.user.phone = token.phone
      session.user.address = token.address
      return session
    }
  },
  pages: {
    signIn: '/login',
    signOut: '/'
  }
}

export default NextAuth(authOptions)