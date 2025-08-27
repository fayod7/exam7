import { memo, useState } from "react";
import Box from "@/components/ui/Box";
import Title from "@/components/ui/Title";
import StudentView, { type IUser } from "@/components/student-view/StudentView";
import { useStudent } from "@/api/hooks/useStudent";

const Student = () => {
  const { getAllUsers } = useStudent()
  const { data } = getAllUsers()
  const [filter, setFilter] = useState('all')
  const filteredData = data?.filter((user:IUser) => {
    if(filter ===  'all') {
      return true
    } else {
      return user.gender === filter
    }
  })
  return (
    
    <div>
      <Box>
        <div className="flex justify-between">
          <Title>Student</Title>
          <div className="flex gap-4">
            <select value={filter} onChange={(e)=> setFilter(e.target.value)} name="" id="" className="outline-0">
              <option value="all">Barchasi</option>
              <option value="female">Qizlar</option>
              <option value="male">Bollar</option>
            </select>
          </div>
        </div>
      </Box>
      <StudentView data={filteredData}/>
    </div>
  );
};

export default memo(Student);
