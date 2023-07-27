import { api } from "@/config/api";
import { ListResponse } from "@/models/ListResponse";
import { Movie } from "@/models/Movie";

export const listMovies = async () => {
  const {
    data: { results },
  } = await api.get<ListResponse<Movie>>("films/");
  console.log(results);

  return results;
};
