import { default as NextAuthMiddleware } from "next-auth/middleware";
import { default as crypto } from "crypto";

// Asegúrate de que el secret esté definido en tus variables de entorno
const secret = process.env.NEXTAUTH_SECRET;

// Configuración de NextAuth con el secret
const nextAuthConfig = {
  secret,
  // Otras opciones de configuración aquí
};

// Exporta el middleware de NextAuth con la configuración modificada
export default NextAuthMiddleware(nextAuthConfig);

export const config = {
  matcher: ["/dashboard/:path*"]
}


// import { default as NextAuthMiddleware } from "next-auth/middleware";
// import { default as crypto } from "crypto";

// export { default } from "next-auth/middleware";

// export const config = {
//   matcher: ["/dashboard"]
// }
