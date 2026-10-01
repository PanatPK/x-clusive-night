/* ============================================================
   ตั้งค่าตรงนี้ที่เดียว
   ============================================================ */
const SHOP = {
  name: 'X-CLUSIVE NIGHT',
  logo: '',                    // ปล่อยว่าง = ใช้โลโก้ X-CLUSIVE NIGHT ที่ฝังในไฟล์แล้ว
  adminPin: '2610',            // PIN ปุ่มแอดมินบนจอบาร์
};
const TABLES = ['1', '2', 'VIP 1', 'VIP 2'].concat(Array.from({ length: 18 }, (_, i) => String(i + 5)));

// Firebase: วาง config จาก Project settings → Your apps
const FIREBASE_CONFIG = {
  apiKey: "",
  authDomain: "",
  projectId: "",
  storageBucket: "",
  messagingSenderId: "",
  appId: ""
};

// เมนู 6 รายการ  img = ไฟล์รูป (โฟลเดอร์ img ข้างไฟล์นี้ หรือ URL)  ใส่ soldOut:true ถ้าหมด
const MENU = [
  { id: 'd1', name: 'เมนู 1', desc: '', img: 'img/d1.jpg' },
  { id: 'd2', name: 'เมนู 2', desc: '', img: 'img/d2.jpg' },
  { id: 'd3', name: 'เมนู 3', desc: '', img: 'img/d3.jpg' },
  { id: 'd4', name: 'เมนู 4', desc: '', img: 'img/d4.jpg' },
  { id: 'd5', name: 'เมนู 5', desc: '', img: 'img/d5.jpg' },
  { id: 'd6', name: 'เมนู 6', desc: '', img: 'img/d6.jpg' },
];
