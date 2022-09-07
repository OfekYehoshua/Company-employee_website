import { createSlice } from "@reduxjs/toolkit";

export const ProfileSlice = createSlice({
    name: 'profile',
    initialState:{ 
        profile:{
            firstName: 'Amit',
            lastName: 'El Al',
            email: 'amio121212@email.com',
            date: '19/04/2000',
            photo: '',
            phone:'050-530-9880',
            rule: 'Advisor',
            password: '1234'
        },

        socials: {
            address: "Shmuel Tamir 58/6",
            linkedIn: "https://www.linkedin.com/in/amit-el-al-30746022a/",
            facebook: "Amit_Elal",
            twitter: "https://twitter.com/_exize",
            instegram: "Amit Elal",
        }
    },
    

    reducers:{
        update:(state, values)=> {
            console.log(values.payload)
            state.profile.firstName = values.payload.firstName
            state.profile.lastName = values.payload.lastName
            state.profile.email = values.payload.email
            state.profile.date = values.payload.date
            state.profile.photo = values.payload.photo
            state.profile.phone = values.payload.phone
            state.profile.rule = values.payload.rule
            state.profile.password = values.payload.password
        },

        updateSocials:(state, values) =>{
            state.socials.address = values.payload.address
            state.socials.linkedIn = values.payload.linkedIn
            state.socials.facebook = values.payload.facebook
            state.socials.twitter = values.payload.twitter
            state.socials.instegram = values.payload.instegram
        }
        
        
    }
})

export const {update, updateSocials} = ProfileSlice.actions
export const selectProfile = (state) => state.profile.profile
export const selectSocials = (state) => state.profile.socials
export default ProfileSlice.reducer;