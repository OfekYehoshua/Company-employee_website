import { createSlice } from "@reduxjs/toolkit";

export const ProfileSlice = createSlice({
  name: "profile",
  initialState: {
    profile: {
      firstName: "Amalia",
      lastName: "Nilsson",
      email: "amio121212@gmail.com",
      date: "19/04/2000",
      photo: "https://i0.wp.com/newdoorfiji.com/wp-content/uploads/2018/03/profile-img-1.jpg?ssl=1",
      rule: "Advisor",
      password: "1234"
    },

    socials: {
      address: "Rehavia 34/5",
      linkedIn: "https://www.linkedin.com/in/philip-kouchner-886264100/",
      facebook: "https://www.facebook.com/phil.serlin",
      twitter: "https://twitter.com/_exize",
      instegram: "https://www.instagram.com/phil"
    },

    user: {
      email: "",
      password: ""
    },

    payment: {
      cardName: "",
      cardNumber: "",
      expireDate: "",
      Cvv: ""
    }
  },

  reducers: {
    update: (state, values) => {
      console.log(values.payload)
      state.profile.firstName = values.payload.firstName;
      state.profile.lastName = values.payload.lastName;
      state.profile.email = values.payload.email;
      state.profile.date = values.payload.date;
      state.profile.photo = values.payload.photo;
      state.profile.phone = values.payload.phone;
      state.profile.rule = values.payload.rule;
      state.profile.password = values.payload.password;
      state.user.email = values.payload.email
      state.user.password = values.payload.password
    },

    updateSocials: (state, values) => {
      state.socials.address = values.payload.address;
      state.socials.linkedIn = values.payload.linkedIn;
      state.socials.facebook = values.payload.facebook;
      state.socials.twitter = values.payload.twitter;
      state.socials.instegram = values.payload.instegram;
    },

    updateUser: (state, values) => {
      if( values.payload.email === state.profile.email && values.payload.password == state.profile.password){
        state.user.email = values.payload.email;
        state.user.password = values.payload.password;
      }
    },

    logout: (state) => {
      state.user.email = ""
      state.user.password = ""
    },

    updatePayment: (state, values) => {
      console.log(values.payload)
      state.payment.cardName = values.payload.cardName;
      state.payment.cardNumber = values.payload.cardNumber;
      state.payment.expireDate = values.payload.expireDate;
      state.payment.Cvv = values.payload.Cvv;
    }
  },
});

export const { update, updateSocials, updateUser, updatePayment,logout } = ProfileSlice.actions;
export const selectProfile = (state) => state.profile.profile;
export const selectSocials = (state) => state.profile.socials;
export const selectUser = (state) => state.profile.user;
export const selectPayment = (state) => state.profile.payment;
export default ProfileSlice.reducer;
