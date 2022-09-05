import { createSlice } from "@reduxjs/toolkit";

export const ProfileSlice = createSlice({
    name: 'profile',
    initialState:{ profile:{
        firstName: 'guest',
        lastName: 'guest',
        imgUrl: "",
        birthDate: '',
        mail: '',
        phoneNumber:'',
        role: ''
    }},

    reducers:{
        update:(state)=> {
            firstName = ""
            lastName= 'guest'
            imgUrl= ""
            birthDate= ''
            mail= ''
            phoneNumber=''
            role= ''
        }
    }
})

export const {update} = ProfileSlice.actions
export const selectProfile = (state) => state.name.profile