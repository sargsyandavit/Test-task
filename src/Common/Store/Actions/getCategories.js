import { mainApiService } from "../../services";

export const SET_CATEGORISE = "getipi/set-categories";

const getCategories = () => async (dispach) => {
  const data = await mainApiService.getCategories();
  dispach({ type: SET_CATEGORISE, data });
};

export default getCategories;
