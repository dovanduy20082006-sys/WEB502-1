// 1. Hàm tính điểm trung bình (Arrow Function + Return type)
const tinhDiemTrungBinh = (
  diem1: number,
  diem2: number,
  diem3: number
): number => {
  return (diem1 + diem2 + diem3) / 3;
};

// 2. Định nghĩa kiểu hàm kiểm tra số chẵn (Function as Type)
type KiemTraSoChan = (n: number) => boolean;

const laSoChan: KiemTraSoChan = (n) => {
  return n % 2 === 0;
};

// 3. Hàm tạo thông tin người dùng
const taoThongTinNguoiDung = (
  ten: string,
  tuoi: number = 18,
  diaChi?: string
): string => {
  // nếu diaChi không truyền thì hiện "Chưa cập nhật"
  return `Tên: ${ten}, Tuổi: ${tuoi}, Địa chỉ: ${diaChi ?? "Chưa cập nhật"}`;
};

// 4. Hàm xử lý danh sách sản phẩm (Spread + Rest)
type SanPham = {
  ten: string;
  gia: number;
};

const xuLyDanhSachSanPham = (
  sanPhamMoi: SanPham,
  ...danhSachCu: SanPham[]
): SanPham[] => {
  return [...danhSachCu, sanPhamMoi];
};

// ===== Test =====
console.log("Điểm TB:", tinhDiemTrungBinh(9, 8, 7));
console.log("4 là số chẵn?", laSoChan(4));
console.log(taoThongTinNguoiDung("Minh", 22, "HN"));
console.log(taoThongTinNguoiDung("Lan"));
console.log(
  xuLyDanhSachSanPham(
    { ten: "Laptop", gia: 15000000 },
    { ten: "Chuột", gia: 200000 },
    { ten: "Bàn phím", gia: 500000 }
  )
);
