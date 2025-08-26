import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query"
import { api } from ".."
interface IState {
    first_name: string
    last_name: string
    gender: string
    address: string
  }
export const useStudent = () => {
    const queryClient = useQueryClient()
    const getAllUsers = () => useQuery({
        queryKey: ['users'],
        queryFn: () => api.get('/user' ).then(res => res.data)
    })
    const deleteMutation = useMutation({
        mutationFn: (id:string) => api.delete(`/user/${id}`),
         onSuccess: () => {
            queryClient.invalidateQueries({
                queryKey: ['users']
            })
    }
})

  const createMutation = useMutation({
        mutationFn: (user:IState) => api.post('/user', user),
         onSuccess: () => {
            queryClient.invalidateQueries({
                queryKey: ['users']
            })
        }
    })

    const updateMutation = useMutation({
        mutationFn: ({ id, user }: { id: string; user: IState }) => api.put(`/user/${id}`, user),
  onSuccess: () => {
    queryClient.invalidateQueries({ queryKey: ["users"] })
  },
    })

    return { getAllUsers, deleteMutation, createMutation, updateMutation }
}