"use strict";
// ==============================
// LAB 1 - TYPESCRIPT CƠ BẢN
// ==============================
Object.defineProperty(exports, "__esModule", { value: true });
/*
------------------------------------------------
i. Hàm tính chu vi và diện tích hình chữ nhật
------------------------------------------------
*/
// Khai báo hàm rectangleInfo
// length: number  -> chiều dài
// width: number   -> chiều rộng
// Hàm trả về 1 object gồm:
// - perimeter: number (chu vi)
// - area: number (diện tích)
function rectangleInfo(length, width) {
    // Tính chu vi hình chữ nhật
    // Công thức: (dài + rộng) * 2
    const perimeter = (length + width) * 2;
    // Tính diện tích hình chữ nhật
    // Công thức: dài * rộng
    const area = length * width;
    // Trả về object chứa chu vi và diện tích
    return {
        perimeter: perimeter,
        area: area
    };
}
// Gọi thử hàm để kiểm tra
const rect = rectangleInfo(5, 3);
// In chu vi ra console
console.log("Chu vi:", rect.perimeter);
// In diện tích ra console
console.log("Diện tích:", rect.area);
/*
------------------------------------------------
ii. Hàm tính tổng nhiều số (rest parameter)
------------------------------------------------
*/
// Khai báo hàm sumNumbers
// ...numbers: number[]
// -> có nghĩa là nhận vào NHIỀU số, không giới hạn số lượng
function sumNumbers(...numbers) {
    // Khởi tạo biến sum để lưu tổng
    let sum = 0;
    // Duyệt từng phần tử trong mảng numbers
    for (let num of numbers) {
        // Cộng từng số vào biến sum
        sum = sum + num;
    }
    // Trả về tổng cuối cùng
    return sum;
}
// Gọi hàm tính tổng
console.log("Tổng 1:", sumNumbers(1, 2, 3));
console.log("Tổng 2:", sumNumbers(5, 10, 20, 30));
/*
------------------------------------------------
iii. Hàm đếm số lần xuất hiện của 1 ký tự trong chuỗi
------------------------------------------------
*/
// Khai báo hàm countCharacter
// text: string -> chuỗi cần kiểm tra
// char: string -> ký tự cần đếm
function countCharacter(text, char) {
    // Biến đếm số lần xuất hiện
    let count = 0;
    // Duyệt từng ký tự trong chuỗi text
    for (let c of text) {
        // Nếu ký tự hiện tại bằng ký tự cần tìm
        if (c === char) {
            // Tăng biến đếm lên 1
            count++;
        }
    }
    // Trả về số lần xuất hiện
    return count;
}
// Gọi hàm đếm ký tự
console.log("Số lần xuất hiện:", countCharacter("typescript", "t"));
/*
------------------------------------------------
iv. Hàm kiểm tra số nguyên tố (trả về boolean)
------------------------------------------------
*/
// Khai báo hàm isPrime
// n: number -> số cần kiểm tra
function isPrime(n) {
    // Nếu số nhỏ hơn 2 thì KHÔNG phải số nguyên tố
    if (n < 2) {
        return false;
    }
    // Vòng lặp kiểm tra từ 2 đến căn bậc hai của n
    for (let i = 2; i <= Math.sqrt(n); i++) {
        // Nếu n chia hết cho i
        if (n % i === 0) {
            // Không phải số nguyên tố
            return false;
        }
    }
    // Nếu không chia hết cho số nào
    // => là số nguyên tố
    return true;
}
// Gọi hàm kiểm tra số nguyên tố
console.log("7 có phải số nguyên tố không?", isPrime(7));
console.log("10 có phải số nguyên tố không?", isPrime(10));
//# sourceMappingURL=lab1.js.map