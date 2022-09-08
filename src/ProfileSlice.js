import { createSlice } from "@reduxjs/toolkit";

export const ProfileSlice = createSlice({
  name: "profile",
  initialState: {
    profile: {
      firstName: "Amit",
      lastName: "El Al",
      email: "amio121212@email.com",
      date: "19/04/2000",
      photo: "z",
      phone: "+972 50-530-9880",
      rule: "Advisor",
      password: "1234",
    },

    socials: {
      address: "Rehavia 34/5",
      linkedIn: "https://www.linkedin.com/in/philip-kouchner-886264100/",
      facebook: "https://www.facebook.com/phil.serlin",
      twitter: "https://twitter.com/_exize",
      instegram: "https://www.instagram.com/phil",
    },
  },

  reducers: {
    update: (state, values) => {
      console.log(values.payload);
      state.profile.firstName = values.payload.firstName;
      state.profile.lastName = values.payload.lastName;
      state.profile.email = values.payload.email;
      state.profile.date = values.payload.date;
      state.profile.photo = values.payload.photo;
      state.profile.phone = values.payload.phone;
      state.profile.rule = values.payload.rule;
      state.profile.password = values.payload.password;
    },

    updateSocials: (state, value) => {
      state.socials.address = value.payload.address;
      state.socials.linkedIn = value.payload.linkedIn;
      state.socials.facebook = value.payload.facebook;
      state.socials.twitter = value.payload.twitter;
      state.socials.instegram = value.payload.instegram;
    },
  },
});

export const { update, updateSocials } = ProfileSlice.actions;
export const selectProfile = (state) => state.profile.profile;
export const selectSocials = (state) => state.profile.socials;
export default ProfileSlice.reducer;
