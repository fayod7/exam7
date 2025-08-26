import type { IUser } from "@/components/student-view/StudentView";
import { createSlice, type PayloadAction } from "@reduxjs/toolkit";

interface UserState {
  editingUser: IUser | null
}

const initialState: UserState = {
  editingUser: null,
}

const updatingSlice = createSlice({
    name: 'edit',
    initialState,
    reducers: {
        setEditingUser: (state, action: PayloadAction<IUser | null>) => {
            state.editingUser = action.payload
        }
    }
})

export const { setEditingUser } = updatingSlice.actions
export default updatingSlice.reducer