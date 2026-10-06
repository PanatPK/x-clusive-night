/* ============================================================
   ตั้งค่าตรงนี้ที่เดียว
   ============================================================ */
const SHOP = {
  name: 'X-CLUSIVE NIGHT',
  logo: '',                    // ปล่อยว่าง = ใช้โลโก้ X-CLUSIVE NIGHT ที่ฝังในไฟล์แล้ว
  adminPin: '2610',            // PIN ปุ่มแอดมินบนจอบาร์
};
const TABLES = Array.from({ length: 14 }, (_, i) => String(i + 1));

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
  { id: 'd1', name: 'THE PAUSE', desc: 'A soft, refreshing blend made for a moment to pause.\n\n**Ingredients :**\nGin / White Peach Syrup / Strawberry / Lychee Juice / Egg White', img: 'img/d1.jpg' },
  { id: 'd2', name: 'X-CLUSIVE HOUR', desc: 'A bold, refined blend crafted for an X-clusive moment.\n\n**Ingredients :**\nLight Rum / Pineapple Juice / Cherry Berry Juice / Fresh Lime / Rose Syrup', img: 'img/d2.jpg', nonAlc: true },
  { id: 'd3', name: 'COSMOPOLITAN', desc: 'Bright, fruity, sweet and sour.\n\n**Ingredients :**\nVodka / Triple Sec / Cranberry Juice / Lime Juice / Sugar Syrup', img: 'img/d3.jpg' },
  { id: 'd4', name: 'MAI TAI', desc: 'Tropical, fruity, sweet and citrusy.\n\n**Ingredients :**\nLight Rum / Amaretto / Orange Juice / Pineapple Juice / Lime Juice / Grenadine Syrup', img: 'img/d4.jpg', nonAlc: true },
  { id: 'd5', name: 'OLD FASHIONED', desc: 'Rich, smooth and timeless.\n\n**Ingredients :**\nBourbon Whiskey / Sugar / Angostura Bitter', img: 'img/d5.jpg' },
  { id: 'd6', name: 'MOJITO', desc: 'Cool, refreshing and timeless.\n\n**Ingredients :**\nLight Rum / Fresh Lime / Sugar / Mint Leaves / Soda', img: 'img/d6.jpg', nonAlc: true },
  { id: 'd7', name: 'MARGARITA', desc: 'Crisp, zesty and refreshing.\n\n**Ingredients :**\nTequila / Triple Sec / Lime Juice / Simple Syrup', img: 'img/d7.jpg' },
  { id: 'd8', name: 'WHISKY', desc: "Jack Daniel's Tennessee Whiskey\nBold, smooth and classic.", img: 'img/d8.jpg', mixers: ['น้ำเปล่า', 'โซดา', 'โค้ก', 'สไปรท์'] },
  { id: 'd9', name: 'WHITE WINE', desc: 'House White Wine\nCrisp, elegant and refreshing.', img: 'img/d9.jpg' },
  { id: 'd10', name: 'RED WINE', desc: 'House Red Wine\nBold, elegant and smooth.', img: 'img/d10.jpg' },
];
