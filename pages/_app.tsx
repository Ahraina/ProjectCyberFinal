import "../styles/globals.css";
import { SessionProvider, signOut, useSession } from "next-auth/react";
import type { AppProps } from "next/app";
import { useEffect } from "react";

export default function App({ Component, pageProps: { session, ...pageProps } }: AppProps) {
  return (
    <SessionProvider session={session}>
      <InactivityHandler />
      <Component {...pageProps} />
    </SessionProvider>
  );
}

function InactivityHandler() {
  const { data: session } = useSession();

  useEffect(() => {
    if (!session) return;

    let logoutTimeout: NodeJS.Timeout;
    let warningTimeout: NodeJS.Timeout;

    const resetTimer = () => {
      clearTimeout(logoutTimeout);
      clearTimeout(warningTimeout);

      // ⏳ แจ้งเตือน 10 วินาทีก่อน logout
      warningTimeout = setTimeout(() => {
        alert("คุณไม่ได้ใช้งานระบบเป็นเวลา 50 วินาที ระบบจะทำการออกจากระบบอัตโนมัติในอีก 10 วินาที");
      }, 50 * 1000); // เตือนตอน 50 วิ

      // 🔒 logout เมื่อครบ 60 วินาที
      logoutTimeout = setTimeout(() => {
        signOut();
      }, 60 * 1000);
    };

    const events = ["mousemove", "keydown", "click", "scroll"];
    events.forEach((event) => window.addEventListener(event, resetTimer));

    resetTimer();

    return () => {
      events.forEach((event) => window.removeEventListener(event, resetTimer));
      clearTimeout(logoutTimeout);
      clearTimeout(warningTimeout);
    };
  }, [session]);

  return null;
}
