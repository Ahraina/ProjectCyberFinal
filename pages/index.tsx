import { useSession, signIn, signOut } from "next-auth/react";
import { useRouter } from "next/router";

export default function Home() {
  const { data: session } = useSession();
  const router = useRouter();

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      {/* โลโก้ KMUTNB ที่มุมซ้ายบน */}
      <div className="absolute top-8 left-10 p-4">
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/d/d7/KMUTNB_Logo.svg/768px-KMUTNB_Logo.svg.png"
          alt="KMUTNB Logo"
          className="w-48 h-auto"
        />
      </div>

      <h1 className="text-4xl font-bold mb-4">ระบบจัดการเอกสาร</h1>
      {!session ? (
        <button onClick={() => signIn("github")} className="bg-black text-white px-4 py-2 rounded">
          Login with GitHub
        </button>
      ) : (
        <div className="text-center">
          <p className="mb-2">ยินดีต้อนรับ, {session.user?.name}</p>
          <button
            onClick={() => router.push("/create")}
            className="bg-green-600 text-white px-4 py-2 rounded mr-2"
          >
            สร้างเอกสารใหม่
          </button>
          <button
            onClick={() => router.push("/search")}
            className="bg-green-600 text-white px-4 py-2 rounded mr-2"
          >
            สร้างเอกสารจากข้อมูลบุคลากร
          </button>
          <button onClick={() => signOut()} className="bg-red-500 text-white px-4 py-2 rounded">
            ออกจากระบบ
          </button>
        </div>
      )}
    </div>
  );
}
