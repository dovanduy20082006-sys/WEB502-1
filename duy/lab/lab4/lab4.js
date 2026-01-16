"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const student = {
    id: 1,
    name: "Nguyen Van A",
    score: 8.5
};
const user1 = {
    id: 1,
    email: "user@example.com"
};
const user2 = {
    id: 2,
    email: "user2@example.com",
    phone: "0123456789"
};
const add = (a, b) => {
    return a + b;
};
const multiply = (a, b) => {
    return a * b;
};
function logStatus(status) {
    if (status === "loading") {
        console.log("Đang tải...");
    }
    else if (status === "success") {
        console.log("Thành công");
    }
    else if (status === "error") {
        console.log("Có lỗi xảy ra");
    }
}
// Test
console.log(add(3, 4));
console.log(multiply(3, 4));
logStatus("loading");
logStatus("success");
logStatus("error");
//# sourceMappingURL=lab4.js.map