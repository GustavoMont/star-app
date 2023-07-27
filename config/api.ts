import axios, { AxiosResponse } from "axios";
import { camelizeKeys } from "humps";

const baseURL = "https://swapi.dev/api/";

export const api = axios.create({
  baseURL,
});

api.interceptors.response.use((response: AxiosResponse) => {
  if (
    response.data &&
    response.headers["content-type"] === "application/json"
  ) {
    response.data = camelizeKeys(response.data);
  }

  return response;
});
