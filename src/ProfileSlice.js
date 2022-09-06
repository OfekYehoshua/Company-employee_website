import { createSlice } from "@reduxjs/toolkit";

export const ProfileSlice = createSlice({
    name: 'profile',
    initialState:{ 
        profile:{
        firstName: 'guest',
        lastName: 'guest',
        email: 'guest@email.com',
        date: '1/1/1',
        photo: 'url',
        phone:'xxx-xxxxxxx',
        rule: 'y',
        password: '1234'

    },
    

    reducers:{
        update:(state, values)=> {
            console.log(values.payload)
            state.profile.firstName = values.payload.firstName
            state.profile.lastName= values.payload.lastName
            state.profile.email= values.payload.email
            state.profile.date= values.payload.date
            state.profile.photo= values.payload.photo
            state.profile.phone= values.payload.phone
            state.profile.rule= values.payload.rule
            state.profile.password= values.payload.password
        },
        
        
    }}
})

export const {update} = ProfileSlice.actions
export const selectProfile = (state) => state.profile.profile
export default ProfileSlice.reducer;