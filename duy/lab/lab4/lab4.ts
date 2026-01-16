// Bài 1
type Student = {
  id: number;
  name: string;
  score: number;
};

const student: Student = {
  id: 1,
  name: "Nguyen Van A",
  score: 8.5
};

// Bài 2
interface User {
  id: number;
  email: string;
  phone?: string;
}

const user1: User = {
  id: 1,
  email: "user@example.com"
};

const user2: User = {
  id: 2,
  email: "user2@example.com",
  phone: "0123456789"
};

// Bài 3
type Calculate = (a: number, b: number) => number;

const add: Calculate = (a, b) => {
  return a + b;
};

const multiply: Calculate = (a, b) => {
  return a * b;
};

// Bài 4
type ApiStatus = "idle" | "loading" | "success" | "error";

function logStatus(status: ApiStatus): void {
  if (status === "loading") {
    console.log("Đang tải...");
  } else if (status === "success") {
    console.log("Thành công");
  } else if (status === "error") {
    console.log("Có lỗi xảy ra");
  }
}

// Test
console.log(add(3, 4));
console.log(multiply(3, 4));
logStatus("loading");
logStatus("success");
logStatus("error");
