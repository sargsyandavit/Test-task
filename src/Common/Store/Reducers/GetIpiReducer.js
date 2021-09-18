import { SET_CATEGORISE } from "../Actions/getCategories";
import { SET_DATA_IN_STORE } from "../Actions/GetIpiAction";

const inishalStaate = {
  data: [],
  categorise: [],
};

export default function GetIpiReducers(state = inishalStaate, action) {
  switch (action.type) {
    case SET_DATA_IN_STORE:
      return {
        ...state,
        data: [...(action.isNewCategoria ? [] : state.data), ...action.value],
      };

    case SET_CATEGORISE:
      return {
        ...state,
        categorise: [...action.data],
      };
    default:
      return state;
  }
}
