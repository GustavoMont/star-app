import { api } from "@/config/api";
import { ListResponse } from "@/models/ListResponse";
import { Planet } from "@/models/Planet";

export const listPlanets = async () => {
  const {
    data: { results },
  } = await api.get<ListResponse<Planet>>("planets/");
  return results;
};
