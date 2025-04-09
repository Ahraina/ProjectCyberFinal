import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="bg-white shadow p-4 flex justify-between">
      <div className="font-bold text-lg">
        <Link href="/">KMUTNB</Link>
      </div>
      <div className="space-x-4">
        <Link href="/">หน้าหลัก</Link>
        <Link href="/create">สร้างเอกสาร</Link>
      </div>
    </nav>
  );
}
