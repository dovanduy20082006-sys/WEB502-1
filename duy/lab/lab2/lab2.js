"use strict";
// Tạo type Product có các trường sau:
// name: string
// price: number
// sale: boolean
// rate: enum {low : 'Thấp', medium: 'Trung bình', hight : 'Cao'}
// Tạo mảng listProducts có các phần tử có kiểu Product
// Nhập ít nhất 5 phần tử
// Viết hàm thêm mới 1 phần tử vào mảng listProducts có key = description,
// có giá trị = 'Tốt' nếu price > 5, 
// 'Bình thường' nếu price <=5 (sử dụng map)
// Viết hàm hiển thị danh sách sản phẩm: (Tên sản phẩm, giá bán, trạng thái sale,Đánh giá) (Sử dụng forEach)
// Viết hàm tính tổng giá bán sản phẩm (sử dụng reduce)
// Viết hàm lọc những sản phẩm đang Sale và đánh giá từ Trung bình trở lên (Sử dụng filter)
Object.defineProperty(exports, "__esModule", { value: true });
// 1. Tạo enum rate
var Rate;
(function (Rate) {
    Rate["low"] = "Th\u1EA5p";
    Rate["medium"] = "Trung b\u00ECnh";
    Rate["hight"] = "Cao";
})(Rate || (Rate = {}));
// 3. Tạo mảng listProducts (ít nhất 5 phần tử)
let listProducts = [
    { name: "Áo thun", price: 4, sale: true, rate: Rate.medium },
    { name: "Quần jean", price: 8, sale: false, rate: Rate.hight },
    { name: "Giày thể thao", price: 12, sale: true, rate: Rate.hight },
    { name: "Mũ lưỡi trai", price: 3, sale: false, rate: Rate.low },
    { name: "Áo khoác", price: 10, sale: true, rate: Rate.medium }
];
// 4. Hàm thêm description bằng map
function addDescription(products) {
    return products.map(product => ({
        ...product,
        description: product.price > 5 ? "Tốt" : "Bình thường"
    }));
}
// Cập nhật lại listProducts
listProducts = addDescription(listProducts);
// 5. Hàm hiển thị danh sách sản phẩm (forEach)
function showProducts(products) {
    console.log("Danh sách sản phẩm:");
    products.forEach(product => {
        console.log(`Tên: ${product.name} | Giá: ${product.price} | Sale: ${product.sale} | Đánh giá: ${product.rate} | Mô tả: ${product.description}`);
    });
}
// 6. Hàm tính tổng giá bán (reduce)
function totalPrice(products) {
    return products.reduce((sum, product) => sum + product.price, 0);
}
// 7. Hàm lọc sản phẩm đang sale và rate từ Trung bình trở lên (filter)
function filterSaleAndGoodRate(products) {
    return products.filter(product => product.sale === true &&
        (product.rate === Rate.medium || product.rate === Rate.hight));
}
// ================== TEST ==================
showProducts(listProducts);
console.log("Tổng giá sản phẩm:", totalPrice(listProducts));
const saleGoodProducts = filterSaleAndGoodRate(listProducts);
console.log("Sản phẩm đang sale & đánh giá từ Trung bình trở lên:");
saleGoodProducts.forEach(p => {
    console.log(`${p.name} - ${p.price} - ${p.rate}`);
});
//# sourceMappingURL=lab2.js.map