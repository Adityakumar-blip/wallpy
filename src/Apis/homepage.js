import axios from "axios";
import { atom, selector } from "recoil";

export const homePage = atom({
  key: "homePage",
  default:
    "https://api.unsplash.com/photos/?client_id=HsYF8p3ImJCStWz7AQwZiixIzGUqmhJhsABYXn5JSdQ",
});

export const AllImages = selector({
  key: "imagesData",
  get: async ({ get }) => {
    try {
      const url = get(homePage);

      const response = await axios.get(url);
      const results = response.data;

      return results;
    } catch (error) {
      throw error;
    }
  },
});
