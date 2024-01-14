import { createSlice } from '@reduxjs/toolkit';
import { act } from 'react-dom/test-utils';

interface IAdState {
  platform: 'instagram' | 'facebook' | 'google' | 'tiktok';
  username: string;
  photo: string;
  button: string;
  text: string;
}

interface IInitialState {
  platforms: string[];
  countries: any[];
  languages: any[];

  chosenCountries: string;
  adGoal: string;
  name: string;
  adWebsite: string;

  ads: any;
  gen_id: string;
}

const initialState: IInitialState = {
  platforms: [],
  countries: [],
  languages: [],

  chosenCountries: '',
  adGoal: '',
  name: '',
  adWebsite: '',

  ads: [],
  gen_id: '',
};

const adSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    setPlatforms(state, action) {
      state.platforms = [];
      state.platforms = action.payload;
    },

    setCountriesandLanguages(state, action) {
      state.countries = [];
      state.languages = [];
      // state.adGoal = '';
      // state.name = '';
      // state.adWebsite = '';

      state.countries.push(action.payload.location);
      state.languages.push(action.payload.language);
      // state.adGoal = action.payload.adGoal;
      // state.adWebsite = action.payload.adWebsite;
      // state.name = action.payload.name;
    },

    setAdPreferences(state, action) {
      state.chosenCountries = action.payload.chosenCountries;
      state.adGoal = action.payload.adGoal;
      state.name = action.payload.name;
      state.adWebsite = action.payload.adWebsite;
    },

    setAdInfo(state, action) {
      state.ads = [];
      state.gen_id = '';
      state.ads.push(action.payload.ads);
      state.gen_id = action.payload.gen_id;
    },
  },
});

export const {
  setCountriesandLanguages,
  setPlatforms,
  setAdInfo,
  setAdPreferences,
} = adSlice.actions;
export default adSlice.reducer;
