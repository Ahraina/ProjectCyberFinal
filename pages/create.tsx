import { useState } from "react";
import Navbar from "../components/Navbar";

export default function CreateDocument() {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [members, setMembers] = useState<string[]>([""]);

  const addMember = () => setMembers([...members, ""]);
  const removeMember = (index: number) =>
    setMembers(members.filter((_, i) => i !== index));
  const updateMember = (value: string, index: number) => {
    const newMembers = [...members];
    newMembers[index] = value;
    setMembers(newMembers);
  };

  const handleSubmit = () => {
    alert("");
  };

  return (
    <div className="min-h-screen bg-gray-100">
      <Navbar />
      <div className="max-w-2xl mx-auto py-8 px-4">
        <h1 className="text-3xl font-semibold mb-6">สร้างเอกสารใหม่</h1>
        <input
          type="text"
          placeholder="หัวข้อเรื่อง"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          className="w-full p-2 mb-4 border rounded"
        />
        <textarea
          placeholder="เนื้อหา"
          value={content}
          onChange={(e) => setContent(e.target.value)}
          className="w-full p-2 mb-4 border rounded h-40"
        />
        <h2 className="text-xl font-medium mb-2">สมาชิก</h2>
        {members.map((member, index) => (
          <div key={index} className="flex items-center mb-2 gap-2">
            <input
              type="text"
              value={member}
              onChange={(e) => updateMember(e.target.value, index)}
              className="flex-1 p-2 border rounded"
            />
            <button onClick={() => removeMember(index)} className="text-red-500">ลบ</button>
          </div>
        ))}
        <button onClick={addMember} className="mb-4 text-blue-500">+ เพิ่มสมาชิก</button>
        <br />
      </div>
    </div>
  );
}
