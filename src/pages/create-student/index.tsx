import { useStudent } from "@/api/hooks/useStudent";
import Box from "@/components/ui/Box";
import Title from "@/components/ui/Title";
import type { RootState } from "@/lib";
import { REGIONS } from "@/static";
import { memo, useEffect, useState, type ChangeEvent, type FormEvent } from "react";
import { useSelector } from "react-redux";

const CreateStudent = () => {
  const { createMutation , updateMutation} = useStudent()
    const editingUser = useSelector((state: RootState) => state.updatingReducer.editingUser)

useEffect(() => {
  if (editingUser) setFormData(editingUser)
}, [editingUser])

   interface IState {
    first_name: string
    last_name: string
    gender: string
    address: string
  }
  const initialState = {
    first_name: '',
     last_name: '',
    gender: '',
    address: ''
  }
  const [formData, setFormData] = useState<IState>(initialState)
  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    console.log(formData);
    if (editingUser) {
    updateMutation.mutate({ id: editingUser.id, user: formData })
  } else {
    createMutation.mutate(formData, {
      onSuccess: () => setFormData(initialState),
    })
  }
  }

  const handleChange = (e:ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const {name, value} = e.target
     setFormData(prev => ({...prev, [name]:value}))
  }
  return (
    <div>
      <Box>
        <Title>Manage Student</Title>
      </Box>
      <Box>
        <div className="max-w-[600px] w-full">
          <Title className="mb-3">Create</Title>
          <form onSubmit={handleSubmit}>
            <input value={formData.first_name} name="first_name" onChange={handleChange}
              type="text"
              className="w-full border rounded-xl h-10 indent-3 border-slate-200 mb-3"
              placeholder="first name"
            />
            <input value={formData.last_name} name="last_name" onChange={handleChange}
              type="text"
              className="w-full border rounded-xl h-10 indent-3 border-slate-200 mb-3"
              placeholder="last name"
            />
            <select onChange={handleChange} 
              className="w-full border rounded-xl h-10 indent-2 border-slate-200 mb-3"
              name="gender"
             
            >
              <option value="gender" hidden>
                Gender
              </option>
              <option value="male">Male</option>
              <option value="female">Female</option>
            </select>
            <select
              className="w-full border rounded-xl h-10 indent-2 border-slate-200 mb-3"
              name="address" onChange={handleChange}
            
            >
              {
                REGIONS?.map((item:any, inx) => (
                  <option key={inx} value={item}>{item}</option>
                ))
              }
            </select>
            <button type="submit" className="w-full rounded-xl h-10 mb-3 bg-blue-500 text-white">
              Submit
            </button>
          </form>
        </div>
      </Box>
    </div>
  );
};

export default memo(CreateStudent);
