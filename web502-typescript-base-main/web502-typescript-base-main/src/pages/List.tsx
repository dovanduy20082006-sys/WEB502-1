import { useState, useEffect } from "react";
import axios from "axios";


type Courses = {
  id: number;
  name: string;
  credit: number;
  category: string;
  teacher: string;
};

function ListPage() {
  const [courses, setCourses] = useState<Courses[]>([]);

  useEffect (()=>{
    const getAll = async () => {
      try {
        const {data} = await axios.get("http://localhost:3000/courses");
        console.log(data);
        setCourses(data);
        
      } catch (error) {
        console.log(error);
        
      }
    };
    getAll();
  },[]);
  return (
    <div className="p-6">
      <h1 className="text-2xl font-semibold mb-6">Danh sách</h1>

      <div className="overflow-x-auto">
        <table className="w-full border border-gray-300 rounded-lg">
          <thead className="bg-gray-100">
            <tr>
              <th className="px-4 py-2 border border-gray-300 text-left">ID</th>
              <th className="px-4 py-2 border border-gray-300 text-left">
                Name
              </th>
              <th className="px-4 py-2 border border-gray-300 text-left">
                Description
              </th>
              <th className="px-4 py-2 border border-gray-300 text-left">
                Actions
              </th>
            </tr>
          </thead>

          <tbody>
            {courses.map((item)=>(
            <tr className="hover:bg-gray-50">
              <td className="px-4 py-2 border border-gray-300">{item.id}</td>
              <td className="px-4 py-2 border border-gray-300">{item.name}</td>
              <td className="px-4 py-2 border border-gray-300">{item.teacher}</td>
              <td className="px-4 py-2 border border-gray-300"></td>
              <button></button>

            </tr>


))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default ListPage;