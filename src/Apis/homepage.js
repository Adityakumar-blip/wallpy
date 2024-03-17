import axios from "axios";
import { atom, selector } from "recoil";

export const homePage = atom({
  key: "homePage",
  default:
    "https://api.unsplash.com/photos/?client_id=HsYF8p3ImJCStWz7AQwZiixIzGUqmhJhsABYXn5JSdQ",
});

export const AllImages = selector({
  key: "fetchPokemonListSelector",
  get: async ({ get }) => {
    try {
      const url = get(homePage); // Moved url declaration here

      console.log("url", url);

      const response = await axios.get(url); // Use axios for API call
      const results = response.data; // Assuming data structure matches your needs

      console.log("Api Results", results);

      return results;
    } catch (error) {
      throw error;
    }
  },
});
