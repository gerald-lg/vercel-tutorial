import NextAuth from 'next-auth';
import { authConfig } from './auth.config';
 
// Esta función NextAuth(authConfig) crea y configura la autenticación en base a los parámetros de authConfig.
export default NextAuth(authConfig).auth;
 
export const config = {
  // https://nextjs.org/docs/app/building-your-application/routing/middleware#matcher
  matcher: ['/((?!api|_next/static|_next/image|.*\\.png$).*)'],
};