import { mainApiService } from "../../services";

export const SET_DATA_IN_STORE = "getipi/set-data-in-store";

const getCatsAction = (page, categoria, isNewCategoria) => async (dispatch) => {
  const data = await mainApiService.getCats(page, categoria);
  dispatch({
    type: SET_DATA_IN_STORE,
    value: data,
    isNewCategoria,
  });
};

export default getCatsAction;
