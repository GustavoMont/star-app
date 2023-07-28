import { api } from "@/config/api";
import { Character } from "@/models/Character";
import { ListResponse } from "@/models/ListResponse";

export const listCharacters = async () => {
  const {
    data: { results },
  } = await api.get<ListResponse<Character>>("people/");

  return results;
};
