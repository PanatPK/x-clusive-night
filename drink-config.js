/* ============================================================
   ตั้งค่าตรงนี้ที่เดียว
   ============================================================ */
const SHOP = {
  name: 'X-CLUSIVE NIGHT',
  logo: '',                    // ปล่อยว่าง = ใช้โลโก้ X-CLUSIVE NIGHT ที่ฝังในไฟล์แล้ว
  adminPin: '2610',            // PIN ปุ่มแอดมินบนจอบาร์
};
const TABLES = Array.from({ length: 22 }, (_, i) => String(i + 1));

// Firebase: วาง config จาก Project settings → Your apps
const FIREBASE_CONFIG = {
  apiKey: "AIzaSyDkXK3jmYT7-gn6IhQq70eYV7_U2L8Ia88",
  authDomain: "drink-order-368a7.firebaseapp.com",
  projectId: "drink-order-368a7",
  storageBucket: "drink-order-368a7.firebasestorage.app",
  messagingSenderId: "307889058885",
  appId: "1:307889058885:web:447c07c7ad5210eab7df2c"
};

// เมนู 6 รายการ  img = ไฟล์รูป (โฟลเดอร์ img ข้างไฟล์นี้ หรือ URL)  ใส่ soldOut:true ถ้าหมด
const MENU = [
  { id: 'd1', name: 'THE PAUSE', desc: 'A soft, refreshing blend created for one simple moment — to slow down, reset, and enjoy the pause. \n \n ตัวนี้จะเป็นฝั่ง soft / calm / refreshing สื่อ mood ของแคมเปญ It’s Time to Pause โดยตรง หน้าตาควรออก ใสหรือสี pale blush / soft peach ดูเบา สะอาด และสงบ อาจมี light foam บาง ๆ ด้านบนเพื่อเพิ่มความนุ่ม', img: 'img/d1.jpg' },
  { id: 'd2', name: 'เมนู 2', desc: '', img: 'img/d2.jpg' },
  { id: 'd3', name: 'เมนู 3', desc: '', img: 'img/d3.jpg' },
  { id: 'd4', name: 'เมนู 4', desc: '', img: 'img/d4.jpg' },
  { id: 'd5', name: 'เมนู 5', desc: '', img: 'img/d5.jpg' },
  { id: 'd6', name: 'เมนู 6', desc: '', img: 'img/d6.jpg' },
];
