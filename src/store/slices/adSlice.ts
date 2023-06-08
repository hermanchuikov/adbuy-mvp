import { createSlice } from '@reduxjs/toolkit';

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

  ads: any;
}

const initialState: IInitialState = {
  platforms: [],
  countries: [],
  languages: [],
  ads: [],
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
      state.countries.push(action.payload.location);
      state.languages.push(action.payload.language);
    },

    setAdInfo(state, action) {
      state.ads = [];
      state.ads.push(action.payload);
    },
  },
});

export const { setCountriesandLanguages, setPlatforms, setAdInfo } =
  adSlice.actions;
export default adSlice.reducer;
