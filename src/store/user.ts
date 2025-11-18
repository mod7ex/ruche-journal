import { createSlice, type PayloadAction } from '@reduxjs/toolkit'

export interface User {
    uid: string
    email: string
    displayName: string
    photoURL: string
}

interface UserState {
    value: User | null
}

const initialState: UserState = {
    value: null,
}

export const userSlice = createSlice({
    name: 'user',

    initialState,

    reducers: {
        setUser: (state, action: PayloadAction<User | null>) => {
            state.value = action.payload
        },
    },
})

export const serializableUser = (_user: any): User => ({
    uid: _user?.uid,
    email: _user?.email,
    displayName: _user?.displayName,
    photoURL: _user?.photoURL,
})

export const { setUser } = userSlice.actions

export default userSlice.reducer
