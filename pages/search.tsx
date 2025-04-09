import React, { useState } from 'react';
import styles from '../styles/docs.module.css'; // นำเข้า CSS Module
import { useRouter } from 'next/router'; // นำเข้า useRouter สำหรับการนำทาง

// กำหนดประเภทข้อมูลบุคลากร
type Personnel = {
  "ICIT Account": string;
  "คำนำหน้าชื่อทางวิชาการ": string;
  "ชื่อ": string;
  "นามสกุล": string;
  "ตำแหน่ง": string;
};

// สมมุติว่า personnelData คือลิสต์ของข้อมูลบุคลากร
const personnelData: Personnel[] = [
  { "ICIT Account": "001", "คำนำหน้าชื่อทางวิชาการ": "ดร.", "ชื่อ": "ทัศนีย์", "นามสกุล": "รัตนวงศ์แข", "ตำแหน่ง": "พนักงานมหาวิทยาลัย" },
  { "ICIT Account": "002", "คำนำหน้าชื่อทางวิชาการ": "ศาสตราจารย์ ดร.", "ชื่อ": "ธีรวุฒิ", "นามสกุล": "บุณยโสภณ", "ตำแหน่ง": "ผู้บริหารที่แต่งตั้งจากบุคคลภายนอก" },
  { "ICIT Account": "003", "คำนำหน้าชื่อทางวิชาการ": "รศ.", "ชื่อ": "ฉัตรชาญ", "นามสกุล": "ทองจับ", "ตำแหน่ง": "พนักงานมหาวิทยาลัย" },
  { "ICIT Account": "001", "คำนำหน้าชื่อทางวิชาการ": "ดร.", "ชื่อ": "จิราภรณ์", "นามสกุล": "วิรุณศรี", "ตำแหน่ง": "ข้าราชการ" },
  { "ICIT Account": "002", "คำนำหน้าชื่อทางวิชาการ": "ศาสตราจารย์ ดร.", "ชื่อ": "ปัญญา", "นามสกุล": "อรรถเสยโย", "ตำแหน่ง": "นักวิชาการพัสดุ" },
  { "ICIT Account": "003", "คำนำหน้าชื่อทางวิชาการ": "รศ.", "ชื่อ": "มณฑา", "นามสกุล": "ทรงศิริ", "ตำแหน่ง": "พนักงานมหาวิทยาลัย" },
];

const DocsPage = () => {
  const [committeeList, setCommitteeList] = useState([{ name: '', position: '' }]);
  const router = useRouter(); // ใช้ useRouter สำหรับการนำทาง

  const handleGoHome = () => {
    router.push('/'); // นำทางไปที่หน้า home (หรือหน้าหลัก)
  };

  return (
    <div className={styles.container}>
      <div className={styles.formContainer}>
        <div>
          <p>คำสั่ง <input className={styles.textbox} style={{ width: "30%" }} /></p>
          <p>วันที่ <input className={styles.textbox} style={{ width: "30%" }} /> / <input className={styles.textbox} style={{ width: "30%" }} /></p>
        </div>

        <div className={`${styles.section} ${styles.indent}`}>
          <p className={styles.bold}>เรื่อง</p>
          <p><input className={styles.textbox} style={{ width: "80%" }} /></p>
        </div>

        <div className={`${styles.section} ${styles.indent}`}>
          <textarea className={styles.textareaLarge} placeholder="กรอกข้อความเนื้อหาได้ที่นี่..." />
        </div>

        <div className={styles.box}>
          <div id="committee-list">
            <div className={`${styles.committeeRow} d-flex align-items-center mb-2`}>
              <p className="mb-0 me-2">ลงชื่อ.</p>
              <select className={`form-select select2 name me-2`} style={{ width: "400px" }}>
                <option value="">เลือกชื่อ</option>
                {personnelData.map((person: Personnel, i: React.Key | null | undefined) => (
                  <option key={i} value={`${person["คำนำหน้าชื่อทางวิชาการ"]}${person["ชื่อ"]} ${person["นามสกุล"]}`}>
                    {`${person["คำนำหน้าชื่อทางวิชาการ"]}${person["ชื่อ"]} ${person["นามสกุล"]}`}
                  </option>
                ))}
              </select>

              <select className={`form-select select2 position me-2`} style={{ width: "350px" }}>
                <option value="">เลือกตำแหน่ง</option>
                {personnelData.map((person: Personnel, i: React.Key | null | undefined) => (
                  <option key={i} value={person["ตำแหน่ง"]}>
                    {person["ตำแหน่ง"]}
                  </option>
                ))}
              </select>
            </div>
          </div>
        </div>

        <div className={`${styles.section} ${styles.indent}`}>
          <p className={styles.bold}>โดยมีอำนาจและหน้าที่</p>
          <p><input className={styles.textbox} style={{ width: "100%" }} /></p>
          <p><input className={styles.textbox} style={{ width: "100%" }} /></p>
        </div>

        {/* ปุ่มกลับไปหน้าหลัก */}
        <button onClick={handleGoHome} className={styles.goHomeButton}>กลับไปหน้าหลัก</button>
      </div>
    </div>
  );
};

export default DocsPage;
