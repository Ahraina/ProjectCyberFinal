import NextAuth from "next-auth";
import GitHubProvider from "next-auth/providers/github";

export const authOptions = {
  providers: [
    GitHubProvider({
      clientId: process.env.GITHUB_ID!,
      clientSecret: process.env.GITHUB_SECRET!,
    }),
  ],
  secret: process.env.NEXTAUTH_SECRET,

  session: {
    strategy: "jwt", //เก็บ session ไว้ใน Token (JWT หรือ JSON Web Token) แทน Database
    maxAge: 15 * 24 * 60 * 60, //session มีอายุ 15 วัน หลังจากนั้น ผู้ใช้จะต้อง login ใหม่
    updateAge: 24 * 60 * 60,   //ทุกๆ 24 ชั่วโมง ระบบจำทำการรีเฟรช Token ถ้า user Active การใช้งานระบบ 
                              //ใน 24 ชั่วโมง ระบบก็จะไม่ logout แต่ถ้า ไม่ได้ใช้งาน 2 วันจะ logout ทันที
  },
};

export default NextAuth(authOptions);
