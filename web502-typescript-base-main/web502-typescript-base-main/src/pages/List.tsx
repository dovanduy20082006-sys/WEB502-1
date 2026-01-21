function ListPage() {
  const courses = [
    {
      id: 1,
      name: "ReactJS Cơ Bản",
      credit: 3,
      category: "Chuyên ngành",
      teacher: "Nguyễn Văn A",
    },
    {
      id: 2,
      name: "TypeScript",
      credit: 2,
      category: "Chuyên ngành",
      teacher: "Trần Thị B",
    },
    {
      id: 3,
      name: "Cấu trúc dữ liệu",
      credit: 3,
      category: "Cơ sở",
      teacher: "Lê Văn C",
    },
    {
      id: 4,
      name: "Lập trình C",
      credit: 4,
      category: "Đại cương",
      teacher: "Phạm Văn D",
    },
  ];

  return (
    <div className="p-6">
      <h1 className="text-2xl font-semibold mb-6">
        Danh sách khóa học
      </h1>

      <div className="overflow-x-auto">
        <table className="w-full border border-gray-300 rounded-lg">
          <thead className="bg-gray-100">
            <tr>
              <th className="px-4 py-2 border">ID</th>
              <th className="px-4 py-2 border">Tên khóa học</th>
              <th className="px-4 py-2 border">Số tín chỉ</th>
              <th className="px-4 py-2 border">Loại</th>
              <th className="px-4 py-2 border">Giảng viên</th>
              <th className="px-4 py-2 border">Hành động</th>
            </tr>
          </thead>

          <tbody>
            {courses.map((course) => (
              <tr key={course.id} className="hover:bg-gray-50">
                <td className="px-4 py-2 border">{course.id}</td>
                <td className="px-4 py-2 border">{course.name}</td>
                <td className="px-4 py-2 border">{course.credit}</td>
                <td className="px-4 py-2 border">{course.category}</td>
                <td className="px-4 py-2 border">{course.teacher}</td>
                <td className="px-4 py-2 border">
                  <button className="text-blue-600 hover:underline mr-3">
                    Edit
                  </button>
                  <button className="text-red-600 hover:underline">
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default ListPage;
