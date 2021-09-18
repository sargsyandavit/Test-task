import reactDom from "react-dom";

export const mainApiService = {
  baseUrl: "https://api.thecatapi.com/v1",

  Req: (endPoint, config) =>
    fetch(`${mainApiService.baseUrl}${endPoint}`, config),

  getCats: async (page, categorie) => {
    const response = await mainApiService
      .Req(`/images/search?limit=10&page=${page}&category_ids=${categorie}`)
      .then((res) => res.json());
    return response;
  },

  getCategories: async () => {
    return await mainApiService.Req("/categories").then((res) => res.json());
  },
};
