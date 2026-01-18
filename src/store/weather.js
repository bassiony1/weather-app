import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import WeatherService from "../api/weather";

export const getWeather = createAsyncThunk(
  "metricWeather",
  async ({ latitude, longitude }, { getState, rejectWithValue }) => {
    let { metricWeather, latitude: lat, longitude: lon } = getState().weather;
    if (metricWeather && latitude === lat && longitude === lon) {
      return metricWeather;
    } else {
      try {
        let metric = await WeatherService(latitude, longitude, "metric");
        let imperial = await WeatherService(latitude, longitude, "imperial");
        return { metric, imperial };
      } catch (error) {
        return rejectWithValue(error.message);
      }
    }
  }
);
// export const getImperialWeather = createAsyncThunk(
//   "imperialWeather",
//   async ({ latitude, longitude }, { getState, rejectWithValue }) => {
//     let { imperialWeather, latitude: lat, longitude: lon } = getState().weather;
//     if (imperialWeather && latitude === lat && longitude === lon) {
//       return imperialWeather;
//     }
//     try {
//       return await WeatherService(latitude, longitude, "imperial");
//     } catch (error) {
//       rejectWithValue(error.message);
//     }
//   }
// );
const WeatherSlice = createSlice({
  name: "weather",
  initialState: {
    isLoading: false,
    latitude: "",
    longitude: "",
    city: null,
    country: null,
    metricWeather: null,
    imperialWeather: null,
    current: null,
    chosenFormat: "metric",
  },
  reducers: {
    ChangeFormat: (state) => {
      if (state.chosenFormat == "metric") {
        state.current = { ...state.imperialWeather };
        state.chosenFormat = "imperial";
      } else {
        state.current = { ...state.metricWeather };
        state.chosenFormat = "metric";
      }
    },
    setFormat: (state, action) => {
      if (action.payload.setting === "metric") {
        state.chosenFormat = "metric";
      } else {
        state.chosenFormat = "imperial";
      }
    },
    setCord: (state, action) => {
      state.latitude = action.payload.latitude;
      state.longitude = action.payload.longitude;
      state.city = action.payload.city;
      state.country = action.payload.country;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(getWeather.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(getWeather.fulfilled, (state, action) => {
        state.metricWeather = action.payload.metric;
        state.imperialWeather = action.payload.imperial;
        if (state.chosenFormat === "metric")
          state.current = action.payload.metric;
        else state.current = action.payload.imperial;
        state.isLoading = false;
      })
      .addCase(getWeather.rejected, () => {});
  },
});

export const { ChangeFormat, setFormat, setCord } = WeatherSlice.actions;

export default WeatherSlice.reducer;
