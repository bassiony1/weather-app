import axios from "axios";

const getCountries = async (s) => {
  let respone = await axios.get(
    "https://geocoding-api.open-meteo.com/v1/search/",
    {
      params: {
        name: s,
      },
    }
  );
  return respone.data;
};

export default getCountries;
// https://open-meteo.com/images/country-flags/gb.svg