import { memo, type FC } from "react";
import Box from "../ui/Box";
import { SquarePen, Trash } from "lucide-react";
import { useStudent } from "@/api/hooks/useStudent";
import { useDispatch } from "react-redux";
import type { AppDispatch } from "@/lib";
import { setEditingUser } from "@/lib/features/updatingSlice";
import { useNavigate } from "react-router-dom";

export interface IUser{
  id: string
  first_name: string
  last_name: string
  address: string
  gender: string
}

interface Props {
  data: IUser[] | undefined
}

const StudentView:FC<Props> = ({ data }) => {
  const navigate = useNavigate()
  const { deleteMutation } = useStudent()
  const dispatch = useDispatch<AppDispatch>()
  const handleUpdate = (user:IUser):void => {
   dispatch(setEditingUser(user))
   navigate('/create-student')
  }
  return (
    <Box>
      <div className="grid lg:grid-cols-5 md:grid-cols-3 grid-cols-1 gap-3">
        {
            data?.map((user:IUser) => (
                      <div key={user.id} className="border border-slate-200 p-4 rounded-xl text-center">
          <div className="relative">
            <div className="size-20 rounded-full grid place-items-center bg-slate-200 mx-auto">
              <span className="text-4xl font-bold text-slate-400">{user.first_name.slice(0,1)}</span>
            </div>
            <div className="absolute top-0 right-0 flex flex-col gap-3">
              <button onClick={() => deleteMutation.mutate(user.id)} className="cursor-pointer">
                <Trash className="size-5 text-red-500"/>
              </button>
              <button onClick={() => handleUpdate(user)} className="cursor-pointer">
                <SquarePen className="size-5 text-green-600" />
              </button>
            </div>
          </div>
          <div className="mt-4">
            <h3 className="font-bold">{user.first_name} {user.last_name}</h3>
            <p>{user.address}</p>
          </div>
        </div>
            ))
        }
      
      </div>
    </Box>
  );
};

export default memo(StudentView);
